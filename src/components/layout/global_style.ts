import { createGlobalStyle } from 'styled-components';

const font_size = "1em";

// Device breakpoints
const mobile = 'only screen and (max-width : 1080px)';
const tablet = 'screen and (min-device-width : 481px) and (max-device-width : 1024px)';
const desktop = 'only screen and (min-device-width : 1025px)';

export const bg = "#282828";
export const gray = "#928374";
export const red = "#fb4934";
export const green = "#b8bb26";
export const yellow = "#fabd2f";
export const blue = "#458588";
export const purple = "#b16286";
export const aqua = "#689d6a";
export const white = '#ebdbb2';

export default {
    bg,
    gray,
    red,
    green,
    yellow,
    blue,
    purple,
    aqua,
    white,
};

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${bg};
        color: ${white};
        margin: 0px;
        text-rendering: optimizeLegibility;
    }
    a {
        text-decoration: none;
        color: ${blue};
    }
    a:hover {
        color: ${white};
    }
    ul {
        margin-block-start: 0;
    }
    h1 {
        font-size: ${font_size} * 3;
        text-align: center;
        font-weignt: bold;
        color: ${yellow};
        @media ${mobile} {
            font-size: ${font_size} * 3 / 1.5;
        }
        @media ${tablet} {
            font-size: ${font_size} * 3 / 1.5;
        }

    }
    h2 {
        font-size: ${font_size} * 2.3;
        text-align: center;
        font-weignt: bold;
        color: ${yellow};
        @media ${mobile} {
            font-size: ${font_size} * 2.3 / 1.5;
        }
        @media ${tablet} {
            font-size: ${font_size} * 2.3 / 1.5;
        }

    }
    h3 {
        font-size: ${font_size} * 1.9;
        text-align: center;
        font-weignt: bold;
        color: ${yellow};
        @media ${mobile} {
            font-size: ${font_size} * 1.9 / 1.5;
        }
        @media ${tablet} {
            font-size: ${font_size} * 1.9 / 1.5;
        }

    }
    h4 {
        font-size: ${font_size} * 1.4;
        text-align: center;
        font-weignt: bold;
        color: ${yellow};
        @media ${mobile} {
            font-size: ${font_size} * 1.4 / 1.5;
        }
        @media ${tablet} {
            font-size: ${font_size} * 1.4 / 1.5;
        }

    }
`;
