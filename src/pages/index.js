import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/Head"

const Home = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Kelvin Hello</h1>
      <h2>Am Kelvin a fullstack dev in Kenya</h2>
      <p>
        Need a developer <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

export default Home
