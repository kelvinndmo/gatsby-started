import React from "react"
import { useStaticQuery } from "gatsby"

const Image = ({ id }) => {
  console.log(id)
  const assets = useStaticQuery(graphql`
    query {
      allContentfulAsset {
        edges {
          node {
            contentful_id
            file {
              url
            }
          }
        }
      }
    }
  `)
  const imageNode = assets.allContentfulAsset.edges.filter(
    edge => edge.node.contentful_id === id
  )

  console.log(assets)
  return <img src={imageNode[0].node.file.url} alt={id} />
}

export default Image
