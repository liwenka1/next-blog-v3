import { compareDesc } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import List from '@/components/list'

const Home = () => {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return <List posts={posts} />
}

export default Home
