import styled from 'styled-components';

import colors from './global_style';

export const Container = styled.div`
    margin: 0 auto;
    padding: 0 16px;
    max-width: 800px;
    margin-bottom: 16px;
`;

export const SquareContainer = styled.div`
    box-sizing: border-box;
    background-color: ${colors.bg};
    border-radius: 4px;
`;

export const TextContainer = styled.div`
    padding: 16px;
`;
