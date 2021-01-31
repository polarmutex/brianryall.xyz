import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

interface Props {
    data: {
        posts: {
            nodes: any
            total: number
        }
    }
}

const BlogIndex = ({ data }: Props) => {

  return (
    <Layout>
        //<Seo />
        <h1>Hello world!</h1>
        <p>
            My name is Brian. I am a senior software engineer. This is my home
            for my journey to improve my skills and share my knowledge and
            intersets. My goal for this site is to be my plot of land on the
            internet, to own and control and to be a light to the world.
            Thank you for following me on this journey!
        </p>

        <h2>Projects</h2>

        <h2>Posts</h2>

    </Layout>
  )
}

export default BlogIndex

