import React, { useState } from "react"
import { Link } from "gatsby"
import {
    Card,
    PostContainer,
    Cover,
    Content,
    PostTags,
} from "./styled";
import Img from "gatsby-image"

interface Props {
    title: any
    date: any
    body: any
    slug: any
    tags: any
}

const Post = ({ title, date, body, slug, tags }: Props) => {
    return (
        <Card>
            <PostContainer>
                <Cover>
                    <Link to={slug} key={slug}>
                    </Link>
                </Cover>
                <Link to={slug} key={slug}>
                    <Content>
                        <h2>{title}</h2>
                        {date ? <label>{date}</label> : null}
                        <p>{body}</p>
                        <PostTags>
                            {tags.map(tag => (
                                <li>
                                    <Link to={`/${tag}`}>
                                        <div>{tag}</div>
                                    </Link>
                                </li>
                            ))}
                        </PostTags>
                    </Content>
                </Link>
            </PostContainer>
        </Card>
    )
}
export default Post
