import Link from 'next/link'
import { type Post } from 'contentlayer/generated'

interface ListProps {
  posts: Post[]
}

const List = ({ posts }: ListProps) => {
  return (
    <main className="relative -top-[10px] flex flex-col gap-8">
      {posts.map((post) => (
        <Link href={post.url} key={post._id} className="block scale-100 py-4 hover:scale-[1.005] active:scale-100">
          <article>
            <h2>{post.title}</h2>
            <p className="text-[13px] text-gray-700 dark:text-gray-300">{post.date}</p>
            <p className="mt-1">{post.date}</p>
          </article>
        </Link>
      ))}
    </main>
  )
}

export default List
