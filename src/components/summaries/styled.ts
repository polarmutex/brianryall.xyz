import styled from 'styled-components';

import colors from "../layout/global_style";

export const Title = styled.div`
    margin-bottom: -4px;
`;


export const Card = styled.div`
    padding: 16px;
    border-radius: 8px;
    color: ${colors.white};
    &:hover {
        cursor: pointer;
        opacity: 0.9;
        background-color: ${colors.bg};
    }
`;

export const Button = styled(Card)`
    padding-left: 8px;
    display: flex;
    align-items: center

    li {
        list-style: none;
    }
}
`;

export const Date = styled.div`
    color: ${colors.green};
    font-size: 12px;
`;

