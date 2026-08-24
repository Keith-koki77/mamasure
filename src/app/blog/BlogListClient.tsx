'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

export interface Post {
  _id: string
  title: string
  slug: { current: string }
  mainImage?: any
  publishedAt?: string
  categories?: string[]
  author?: { name: string; image?: any }
}

export default function BlogListClient({ posts }: { posts: Post[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const categories = [
    'All',
    ...Array.from(
      new Set(
        posts.flatMap((post) => post.categories || []).filter(Boolean)
      )
    ),
  ]

  const filteredPosts =
    selectedCategory === 'All'
      ? posts
      : posts.filter((post) =>
          post.categories?.includes(selectedCategory)
        )

  return (
    <>
      {/* Scrollable Category Filter Pills for Mobile */}
      {categories.length > 1 && (
        <div className="flex items-center gap-2 mb-8 sm:mb-12 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:justify-center no-scrollbar">
          {categories.map((category) => {
            const isActive = selectedCategory === category
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200 shrink-0 ${
                  isActive
                    ? 'bg-purple-700 text-white shadow-md shadow-purple-200'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-purple-300 hover:text-purple-700'
                }`}
              >
                {category}
              </button>
            )}
          )}
        </div>
      )}

      {/* Responsive Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <article
              key={post._id}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Link href={`/blog/${post.slug?.current}`} className="flex flex-col flex-1">
                {/* Image Container */}
                <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-gray-100">
                  {post.mainImage ? (
                    <Image
                      src={urlFor(post.mainImage).url()}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-purple-50 text-purple-300 font-semibold">
                      MamaSure
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                  <div>
                    <div className="flex items-center gap-x-2 text-xs font-medium text-purple-600 mb-2 sm:mb-3">
                      {post.categories?.[0] && (
                        <span className="rounded-md bg-purple-50 px-2 py-0.5 text-purple-700 font-semibold">
                          {post.categories[0]}
                        </span>
                      )}
                      {post.publishedAt && (
                        <time dateTime={post.publishedAt} className="text-gray-400">
                          {new Date(post.publishedAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </time>
                      )}
                    </div>

                    <h2 className="text-lg sm:text-xl font-bold tracking-tight text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                  </div>

                  {/* Card Footer */}
                  <div className="mt-5 sm:mt-6 flex items-center justify-between border-t border-gray-100 pt-3 sm:pt-4">
                    <span className="text-xs font-semibold text-gray-600 truncate max-w-[140px]">
                      {post.author?.name ? `By ${post.author.name}` : 'MamaSure Team'}
                    </span>
                    <span className="text-xs font-semibold text-purple-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 shrink-0">
                      Read &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-gray-200 p-8 sm:p-12 text-center bg-white">
          <h3 className="text-base font-semibold text-gray-900">No posts in this category</h3>
          <p className="mt-1 text-sm text-gray-500">
            Select another category to view available articles.
          </p>
        </div>
      )}
    </>
  )
}