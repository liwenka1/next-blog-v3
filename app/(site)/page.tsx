import Head from 'next/head'
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import List from '@/components/list'

// const PostCard = (post: Post) => {
//   return (
//     <div className="mb-6">
//       <time dateTime={post.date} className="block text-sm text-slate-600">
//         {format(parseISO(post.date), 'LLLL d, yyyy')}
//       </time>
//       <h2 className="text-lg">
//         <Link href={post.url}>
//           <span className="text-blue-700 hover:text-blue-900">{post.title}</span>
//         </Link>
//       </h2>
//     </div>
//   )
// }

// const Home = () => {
//   const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

//   return (
//     <div className="mx-auto max-w-2xl py-16 text-center">
//       <Head>
//         <title>Contentlayer Blog Example</title>
//       </Head>

//       <h1 className="mb-8 text-3xl font-bold">Contentlayer Blog Example</h1>

//       {posts.map((post, idx) => (
//         <PostCard key={idx} {...post} />
//       ))}
//     </div>
//   )
// }

const Home = () => {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div>
      <List posts={posts} />
    </div>
  )
}

export default Home
