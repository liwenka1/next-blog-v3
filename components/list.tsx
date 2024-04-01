import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { clsx } from 'clsx'
import Color from 'colorjs.io'
import { type Post } from 'contentlayer/generated'
import { type CSSProperties } from 'react'

import { sans } from '@/fonts/fonts'

interface PostTitleProps {
  post: Post
}

const PostTitle = ({ post }: PostTitleProps) => {
  const lightStart = new Color('lab(63 59.32 -1.47)')
  const lightEnd = new Color('lab(33 42.09 -43.19)')
  const lightRange = lightStart.range(lightEnd)
  const darkStart = new Color('lab(81 32.36 -7.02)')
  const darkEnd = new Color('lab(78 19.97 -36.75)')
  const darkRange = darkStart.range(darkEnd)
  const today = new Date()
  const timeSinceFirstPost = (today.valueOf() - new Date('2024-03-18').valueOf()).valueOf()
  const timeSinceThisPost = (today.valueOf() - new Date(post.date).valueOf()).valueOf()
  const staleness = timeSinceThisPost / timeSinceFirstPost

  const titleStyles = {
    '--lightLink': lightRange(staleness).toString(),
    '--darkLink': darkRange(staleness).toString()
  } as CSSProperties

  return (
    <h2
      className={clsx(sans.className, 'text-[28px] font-black text-[--lightLink] dark:text-[--darkLink]')}
      style={titleStyles}
    >
      {post.title}
    </h2>
  )
}

interface ListProps {
  posts: Post[]
}

const List = ({ posts }: ListProps) => {
  return (
    <main className="relative -top-[10px] flex flex-col gap-8">
      {posts.map((post) => (
        <Link href={post.url} key={post._id} className="block scale-100 py-4 hover:scale-[1.005] active:scale-100">
          <article>
            <PostTitle post={post} />
            <p className="text-[13px]">{format(parseISO(post.date), 'LLLL d, yyyy')}</p>
            <p className="mt-1">{post.description}</p>
          </article>
        </Link>
      ))}
    </main>
  )
}

export default List
