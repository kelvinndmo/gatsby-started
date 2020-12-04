import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Image from "../components/Image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Head from "../components/Head"

// export const query = graphql`
//   query($slug: String) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do,YYYY")
      body {
        raw
      }
    }
  }
`

const Blog = ({ data }) => {
  const document = JSON.parse(data.contentfulBlogPost.body.raw)
  console.log(document)

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        console.log(node)

        return <Image id={node.data.target.sys.id} />
      },
    },
  }
  return (
    <Layout>
      <Head title={data.contentfulBlogPost.title} />
      <h1>{data.contentfulBlogPost.title}</h1>
      <p>{data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(document, options)}
    </Layout>
  )
}

export default Blog
