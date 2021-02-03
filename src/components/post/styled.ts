import styled from 'styled-components';
import colors from '../../common';

export const Card = styled.div`
    padding: 1rem;
    box-shadow: @box-shadow-cover;
    margin: 0.7rem 0;
    padding-bottom: 20px;
    background-color: #1e2127;
    border: 1px solid transparent;
`;

export const PostContainer = styled.div`
    .flex-center();
    .frame-small();
    flex-wrap: initial;
    flex-direction: row;
    width: 100%;
    box-sizing: border-box;
    &:hover {
        > div:first-child > a > div {
            transform: scale(1.1) !important
        }
    }
    @media @mobile {
        width: 100%;
        flex-direction: column;
    }
`;

export const Cover = styled.div`
    overflow: hidden;
    margin: @margin-small;
    width: 40%;
    min-width: 40%;
    & > a > div {
        transition: @transition-time transform;
    }
    @media @mobile {
        min-width: 100%;
        width: 100%;
    }
`;

export const Content = styled.div`
    .frame-small();
    text-align: center;
    h1, h2, p {
    text-align: center;
        margin: @margin-zero @margin-zero @margin-zero @margin-zero;
        padding-bottom: 20px;
    }
    h2 {
        text-shadow: @text-shadow-title;
    }
    p {
        .frame-small();
    }
`;

export const PostTags = styled.ul`
    padding: 0;
    display: inline-flex;
    list-style: none;
    justify-content: center;

    li {
        margin-right: 10px;
        justify-content: center;
    }
`;
