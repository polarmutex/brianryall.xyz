import React, { useState } from "react"
import { Link } from "gatsby"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"

interface Props {
    pageContext: any
}

const Post = ({ pageContext}: Props ) => {
    const { previousPagePath, nextPagePath } = pageContext

    return (
        <div>
            {previousPagePath && (
                <Link
                    style={{ float: "left", paddingBottom: "100px", paddingTop: "30px" }}
                    to={previousPagePath}
                >
                    <FaArrowLeft /> Prev{" "}
                </Link>
             )}
            {nextPagePath && (
                <Link
                    style={{ float: "right", paddingBottom: "100px", paddingTop: "30px" }}
                    to={nextPagePath}
                >
                    Next <FaArrowRight />
                </Link>
            )}
        </div>
    )
}
export default Post
