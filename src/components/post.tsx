import React, { useState } from "react"
import { Link } from "gatsby"

import Img from "gatsby-image"
import style from "./post.module.less"

interface Props {
    title: any
    date: any
    body: any
    slug: any
    tags: any
}

const Post = ({ title, date, body, slug, tags }: Props) => {
    return (
        <div className={style.card}>
            <div key={title} className={style.post}>
                <div className={style.cover}>
                    <Link to={slug} key={slug}>
                    </Link>
                </div>
                <Link to={slug} key={slug}>
                    <div className={style.content}>
                        <h2>{title}</h2>
                        {date ? <label>{date}</label> : null}
                        <p>{body}</p>
                        <ul className={style.postTags}>
                            {tags.map(tag => (
                                <li>
                                    <Link to={`/${tag}`}>
                                        <div className={style.badge}>{tag}</div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default Post
