import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { type Post } from 'contentlayer/generated'
import { clsx } from 'clsx'

import { sans } from '@/fonts/fonts'
interface ListProps {
  posts: Post[]
}

const List = ({ posts }: ListProps) => {
  return (
    <main className="relative -top-[10px] flex flex-col gap-8">
      {posts.map((post) => (
        <Link href={post.url} key={post._id} className="block scale-100 py-4 hover:scale-[1.005] active:scale-100">
          <article>
            <h2 className={clsx(sans.className, 'text-[28px] font-black text-link')}>{post.title}</h2>
            <p className="text-[13px]">{format(parseISO(post.date), 'LLLL d, yyyy')}</p>
            <p className="mt-1">{post.description}</p>
          </article>
        </Link>
      ))}
    </main>
  )
}

export default List
