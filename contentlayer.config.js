import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypePrismPlus from 'rehype-prism-plus'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true
    },
    description: {
      type: 'string',
      description: 'The description of the post',
      required: true
    }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/${post._raw.flattenedPath}`
    }
  }
}))

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: { rehypePlugins: [[rehypePrismPlus, { ignoreMissing: true }]] }
})
