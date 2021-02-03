import React, { useState } from "react"
import { Link } from "gatsby"
import {
    Button,
    Title,
    Date,
} from "./styled";

interface SummaryProps {
    slug: string;
    frontmatter: any;
}
const Summary = ({
    slug,
    frontmatter: { title, date}
    }: SummaryProps) => (
    <Link to={`/${slug}`}>
        <Button>
        <div>
            <Title>{title}</Title>
            <Date>{date}</Date>
        </div>
        </Button>
    </Link>
    );

interface Props {
    posts: any
}

const Summaries = ({ posts }: Props) =>
    posts.map((post , i) => {
        const { frontmatter, slug } = post;
        return (
            <Summary
                slug={slug}
                key={i}
                frontmatter={frontmatter}
            />
            )
    });

export default Summaries
