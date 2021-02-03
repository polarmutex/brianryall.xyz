import styled from 'styled-components';
import colors from '../layout/global_style';

export const Container = styled.div`
    font-size: 0.9rem;
    display: flex;
    flex-wrap: wrap;
`;

export const TagContainer = styled.div`
    border-radius: 2px;
    background-color: ${colors.bg};
    color: ${colors.white};
    margin: 0 2px;
    padding: 0 4px;
    &:hover {
        background-color: ${colors.yellow};
        color: ${colors.bg};
    }
`;

export const DateAndTags = styled.div`
    display: flex;
    color: ${colors.green};
    margin-right: 16px;
    margin-bottom: 8px;
`;

export const Interpunct = styled.div`
    padding: 0 8px;
`;

export const Socials = styled.div`
    display: flex;
`;

