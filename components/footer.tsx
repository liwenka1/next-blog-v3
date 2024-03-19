import HomeLink from '@/components/home-link'
import Link from 'next/link'
import { type Post } from 'contentlayer/generated'

interface FotterProps {
  post: Post
}

const Fotter = ({ post }: FotterProps) => {
  return (
    <footer>
      <hr className="mt-10 opacity-10" />
      <p className="mt-10">
        <Link className="text-link underline underline-offset-8" href="https://x.com/liwenka1" target="_blank">
          Discuss on 𝕏
        </Link>
        <span className="mx-2">·</span>
        <Link
          className="text-link underline underline-offset-8"
          href={`https://github.com/liwenka1/next-blog-v3/blob/main/posts${post.url}/index.mdx`}
          target="_blank"
        >
          Edit on GitHub
        </Link>
      </p>
      <div className="mt-20">
        <HomeLink />
      </div>
    </footer>
  )
}

export default Fotter
