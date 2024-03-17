import { allPosts, type Post } from 'contentlayer/generated'

import Fotter from '@/components/footer'

interface DetailLayoutProps {
  children: React.ReactNode
  params: { slug: string }
}

const DetailLayout = ({ children, params }: Readonly<DetailLayoutProps>) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug) as Post

  return (
    <>
      {children}
      <Fotter post={post} />
    </>
  )
}

export default DetailLayout
