import { Link } from "gatsby"
import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"
function about() {
  return (
    <>
      <Layout>
        <Head title="About" />
        <h1>About </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          placeat odio assumenda odit distinctio corporis ab maiores
          consequuntur at consectetur!
          <Link to="/contact">Contact Me</Link>
        </p>
      </Layout>
    </>
  )
}

export default about
