import Head from 'next/head'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { allPosts, type Post } from 'contentlayer/generated'

export async function getStaticPaths() {
  const paths = allPosts.map((post) => post.url)
  return {
    paths,
    fallback: false
  }
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug) as Post

  return (
    <>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <article className="mx-auto max-w-2xl py-16">
        <div className="mb-6 text-center">
          <Link href="/"></Link>
        </div>
        <div className="mb-6 text-center">
          <h1 className="mb-1 text-3xl font-bold">{post?.title}</h1>
          <time dateTime={post?.date} className="text-sm text-slate-600">
            {format(parseISO(post?.date), 'LLLL d, yyyy')}
          </time>
        </div>
        <div className="cl-post-body" dangerouslySetInnerHTML={{ __html: post?.body.html }} />
      </article>
    </>
  )
}

export default PostLayout
