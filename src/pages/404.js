import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const NotFound = () => {
  return (
    <Layout>
      <h1>Page Not Found</h1>
      <Link to="/">Head Home</Link>
    </Layout>
  )
}

export default NotFound
