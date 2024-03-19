import { format, parseISO } from 'date-fns'
import { allPosts, type Post } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { notFound } from 'next/navigation'
import { clsx } from 'clsx'

import { sans } from '@/fonts/fonts'

interface PostDetail {
  params: { slug: string }
}

const PostDetail = ({ params }: PostDetail) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug) as Post

	if (!post) notFound()

  const MDXContent = useMDXComponent(post.body.code)

  return (
    <article className="prose dark:prose-invert">
      <h1 className={clsx(sans.className, 'text-[40px] font-black leading-[44px] text-title')}>{post?.title}</h1>
      <p className="mb-6 mt-2 text-[13px]">{format(parseISO(post?.date), 'LLLL d, yyyy')}</p>
      <div className="mt-10">
        <MDXContent />
      </div>
    </article>
  )
}

export default PostDetail
