import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link }  from "gatsby"

const PageNotFound = () => {

  return (
    <Layout>
      <Seo />
      <Link to="/">Head back home.</Link>
    </Layout>
  )
}

export default PageNotFound
