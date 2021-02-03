import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link }  from "gatsby"

const PageNotFound = () => {

  return (
    <>
      <Seo />
      <Link to="/">Head back home.</Link>
    </>
  )
}

export default PageNotFound
