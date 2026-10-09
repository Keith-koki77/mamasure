import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import type { Metadata } from 'next'

const BASE_URL = 'https://www.mamasure.com'
const REVALIDATE_SECONDS = 60
const DEFAULT_DESCRIPTION = 'Read the latest insights from MamaSure.'

type Props = {
  params: Promise<{ slug: string }>
}

/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

interface SanityChild {
  text?: string
}

interface SanityBlock {
  _type: string
  style?: string
  children?: SanityChild[]
}

interface Post {
  _id: string
  title: string
  slug: { current: string }
  mainImage?: Parameters<typeof urlFor>[0]
  publishedAt?: string
  _updatedAt?: string
  body?: SanityBlock[]
  author?: { name: string; image?: Parameters<typeof urlFor>[0] }
}

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                   */
/* -------------------------------------------------------------------------- */

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
}

// Safely extract plain text from React children (strings, arrays, elements).
// `String(children)` returns "[object Object]" for non-string children,
// which breaks the heading ids used by the table of contents.
function getText(node: React.ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(getText).join('')
  if (React.isValidElement(node)) {
    return getText((node.props as { children?: React.ReactNode }).children)
  }
  return ''
}

// Build a clean ~155 character meta description from the post's plain text.
function buildExcerpt(text?: string, maxLength = 155) {
  if (!text) return undefined
  const clean = text.replace(/\s+/g, ' ').trim()
  if (!clean) return undefined
  if (clean.length <= maxLength) return clean
  return clean.slice(0, maxLength).trimEnd() + '…'
}

/* -------------------------------------------------------------------------- */
/*  Static generation                                                         */
/* -------------------------------------------------------------------------- */

// Pre-render every published post at build time. Posts published later are
// still rendered on demand and refreshed through the revalidate setting.
export async function generateStaticParams() {
  const slugs = await client.fetch<{ slug: string }[]>(
    `*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`
  )
  return slugs.map(({ slug }) => ({ slug }))
}

/* -------------------------------------------------------------------------- */
/*  Metadata                                                                  */
/* -------------------------------------------------------------------------- */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params

  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    "text": pt::text(body),
    mainImage,
    publishedAt,
    _updatedAt,
    author->{ name }
  }`

  const post = await client.fetch(
    query,
    { slug },
    { next: { revalidate: REVALIDATE_SECONDS } }
  )

  if (!post) {
    return {
      title: 'Post Not Found | MamaSure',
      robots: { index: false, follow: false },
    }
  }

  const description = buildExcerpt(post.text) || DEFAULT_DESCRIPTION
  const canonical = `${BASE_URL}/blog/${slug}`

  // 1200x630 is the recommended Open Graph image size
  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).fit('crop').url()
    : undefined

  return {
    title: `${post.title} | MamaSure`,
    description,
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description,
      type: 'article',
      url: canonical,
      siteName: 'MamaSure',
      publishedTime: post.publishedAt,
      modifiedTime: post._updatedAt,
      authors: post.author?.name ? [post.author.name] : undefined,
      images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630, alt: post.title }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      images: imageUrl ? [imageUrl] : [],
    },
  }
}

/* -------------------------------------------------------------------------- */
/*  Data fetching                                                             */
/* -------------------------------------------------------------------------- */

async function getPostAndRelated(slug: string) {
  const postQuery = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    _updatedAt,
    body,
    author->{ name, image }
  }`

  const post: Post | null = await client.fetch(
    postQuery,
    { slug },
    { next: { revalidate: REVALIDATE_SECONDS } }
  )

  if (!post) {
    return { post: null, relatedPosts: [] as Post[], nextPost: null as Post | null }
  }

  const relatedQuery = `*[_type == "post" && slug.current != $slug] | order(publishedAt desc)[0...3]{
    _id,
    title,
    slug,
    publishedAt,
    author->{ name }
  }`

  // "Next article" = the post published just before this one.
  // If this post has no publishedAt, fall back to the latest other post.
  const nextQuery = post.publishedAt
    ? `*[_type == "post" && slug.current != $slug && publishedAt < $publishedAt] | order(publishedAt desc)[0]{
        title,
        slug
      }`
    : `*[_type == "post" && slug.current != $slug] | order(publishedAt desc)[0]{
        title,
        slug
      }`

  const [relatedPosts, nextPost] = await Promise.all([
    client.fetch<Post[]>(
      relatedQuery,
      { slug },
      { next: { revalidate: REVALIDATE_SECONDS } }
    ),
    client.fetch<Post | null>(
      nextQuery,
      { slug, publishedAt: post.publishedAt ?? '' },
      { next: { revalidate: REVALIDATE_SECONDS } }
    ),
  ])

  return { post, relatedPosts, nextPost }
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default async function SinglePostPage({ params }: Props) {
  const { slug } = await params
  const { post, relatedPosts, nextPost } = await getPostAndRelated(slug)

  if (!post) {
    notFound()
  }

  const headings =
    post.body
      ?.filter(
        (block: SanityBlock) =>
          block._type === 'block' && block.style && ['h2', 'h3'].includes(block.style)
      )
      .map((block: SanityBlock) => {
        const text = block.children?.map((c: SanityChild) => c.text || '').join('') || ''
        return {
          text,
          level: block.style,
          id: slugify(text),
        }
      }) || []

  const portableTextComponents = {
    block: {
      h2: ({ children }: { children?: React.ReactNode }) => {
        const id = slugify(getText(children))
        return (
          <h2
            id={id}
            className="scroll-mt-24 text-xl sm:text-2xl font-bold text-gray-900 mt-8 sm:mt-10 mb-3 sm:mb-4"
          >
            {children}
          </h2>
        )
      },
      h3: ({ children }: { children?: React.ReactNode }) => {
        const id = slugify(getText(children))
        return (
          <h3
            id={id}
            className="scroll-mt-24 text-lg sm:text-xl font-semibold text-gray-900 mt-6 sm:mt-8 mb-2 sm:mb-3"
          >
            {children}
          </h3>
        )
      },
    },
  }

  // Article structured data for Google
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    datePublished: post.publishedAt,
    dateModified: post._updatedAt || post.publishedAt,
    author: post.author?.name
      ? { '@type': 'Person', name: post.author.name }
      : undefined,
    image: post.mainImage ? urlFor(post.mainImage).url() : undefined,
    publisher: {
      '@type': 'Organization',
      name: 'MamaSure',
      url: BASE_URL,
    },
    mainEntityOfPage: `${BASE_URL}/blog/${slug}`,
  }

  return (
    <div className="bg-white pt-20 sm:pt-28 pb-16 sm:pb-20 text-gray-900 min-h-screen">
      <main className="mx-auto max-w-4xl px-4 sm:px-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            // Escape "<" so post content can never break out of the script tag
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />

        {/* Back to Blog Button */}
        <div className="mb-6 sm:mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-purple-700 hover:text-purple-900 transition-colors"
          >
            &larr; Back to Blog
          </Link>
        </div>

        {/* Post Header */}
        <header className="mb-8 sm:mb-10 text-left sm:text-center">
          <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
            MamaSure Resource
          </span>
          <h1 className="mt-3 text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            {post.title}
          </h1>

          <div className="mt-3 sm:mt-4 flex flex-wrap items-center sm:justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-gray-600">
            {post.author?.name && (
              <span className="text-purple-700 font-semibold">
                Written by {post.author.name}
              </span>
            )}
            {post.publishedAt && (
              <>
                <span className="hidden sm:inline">•</span>
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
              </>
            )}
          </div>
        </header>

        {/* Featured Image */}
        {post.mainImage && (
          <div className="relative mb-8 sm:mb-12 h-60 sm:h-[450px] w-full overflow-hidden rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm">
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Dynamic Table of Contents */}
        {headings.length > 0 && (
          <nav
            aria-label="Table of contents"
            className="mb-8 sm:mb-10 rounded-xl border border-purple-100 bg-purple-50/50 p-4 sm:p-6"
          >
            <h2 className="text-xs font-bold uppercase tracking-wider text-purple-800 mb-2 sm:mb-3">
              Table of Contents
            </h2>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              {headings.map(
                (h: { text: string; level?: string; id: string }, index: number) => (
                  <li key={`${h.id}-${index}`} className={h.level === 'h3' ? 'pl-3 sm:pl-4' : ''}>
                    <a
                      href={`#${h.id}`}
                      className="text-purple-700 hover:text-purple-900 hover:underline font-medium block py-0.5"
                    >
                      • {h.text}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>
        )}

        {/* Body Content */}
        <div className="prose prose-base sm:prose-lg prose-purple max-w-none text-gray-700">
          {post.body && (
            <PortableText value={post.body} components={portableTextComponents} />
          )}
        </div>

        {/* Next Post Navigation Link */}
        {nextPost && (
          <div className="mt-12 sm:mt-16 border-t border-b border-gray-100 py-4 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Next Article
            </span>
            <Link
              href={`/blog/${nextPost.slug.current}`}
              className="text-sm sm:text-base font-bold text-purple-700 hover:text-purple-900 hover:underline line-clamp-1"
            >
              {nextPost.title} &rarr;
            </Link>
          </div>
        )}

        {/* Read More Section */}
        {relatedPosts.length > 0 && (
          <section className="mt-12 sm:mt-16">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
              Read More
            </h2>

            <div className="divide-y divide-gray-100">
              {relatedPosts.map((rel: Post) => (
                <article
                  key={rel._id}
                  className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                >
                  <div>
                    <Link
                      href={`/blog/${rel.slug.current}`}
                      className="text-base sm:text-lg font-bold text-gray-900 hover:text-purple-700 transition line-clamp-2"
                    >
                      {rel.title}
                    </Link>
                    <p className="text-xs text-gray-500 mt-1">
                      {rel.author?.name ? `By ${rel.author.name} • ` : ''}
                      {rel.publishedAt
                        ? new Date(rel.publishedAt).toLocaleDateString()
                        : 'Recent'}
                    </p>
                  </div>
                  <Link
                    href={`/blog/${rel.slug.current}`}
                    className="text-xs font-semibold text-purple-700 hover:underline shrink-0 self-start sm:self-auto mt-1 sm:mt-0"
                  >
                    Read article &rarr;
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  )
}