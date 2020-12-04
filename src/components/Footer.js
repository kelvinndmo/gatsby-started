import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import footerSyles from "./foter.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className={footerSyles.footer}>
      <p>{data.site.siteMetadata.author}, © 2020</p>
    </footer>
  )
}

export default Footer
