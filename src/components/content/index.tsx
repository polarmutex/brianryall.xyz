import React from 'react';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import kebabCase from 'lodash/kebabCase';
import { Link } from 'gatsby';
import {
    Container,
    TagContainer,
    Interpunct,
    DateAndTags,
    Socials,
} from './styled';

const Tag = ({ tag }) => (
    <Link to={`/tags/${kebabCase(tag)}/`}>
        <TagContainer>{tag}</TagContainer>
    </Link>
);

const renderDate = (date, updated) =>
    updated ? `Updated ${updated}` : date;

interface Props {
    title: string;
    date: string;
    updated: string;
    tags: any;
    body: string;
    slug: string;
}

const Content = ({
    title,
    date,
    updated,
    tags,
    body,
    slug
}: Props) => (
    <div>
        <h1>{title}</h1>
        <Container>
            <DateAndTags>
                {renderDate(date, updated)}
                <Interpunct>·</Interpunct>{' '}
                {tags.map(tag => (
                    <Tag tag={tag} key={tag} />
                ))}
            </DateAndTags>
        </Container>
        <MDXRenderer>{body}</MDXRenderer>
    </div>
);

export default Content;
