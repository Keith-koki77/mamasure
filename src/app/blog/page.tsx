import { client } from '@/sanity/lib/client'
import BlogListClient, { Post } from './BlogListClient'

async function getPosts(): Promise<Post[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    "categories": categories[]->title,
    author->{ name, image }
  }`
  return await client.fetch(query, {}, { next: { revalidate: 60 } })
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div className="bg-slate-50 min-h-screen pt-20 sm:pt-28 pb-16 sm:pb-20">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-2xl text-center mb-8 sm:mb-12">
          <span className="inline-flex items-center gap-x-1.5 rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
            MamaSure Insights
          </span>
          <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            MamaSure Blog
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-6 sm:leading-7 text-gray-600">
            Expert guidance, maternal health tips, and stories to support your journey to motherhood.
          </p>
        </div>

        {/* Interactive Filterable List */}
        <BlogListClient posts={posts} />
      </main>
    </div>
  )
}