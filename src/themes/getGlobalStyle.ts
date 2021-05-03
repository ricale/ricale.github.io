import { createGlobalStyle } from 'styled-components';

import { NormalTheme } from './normal';

const getGlobalStyle = (theme: NormalTheme) => createGlobalStyle`
    html,body,
    h1,h2,h3,h4,h5,h6,
    p,
    input, button {
        margin: 0;
    }

    h1,h2,h3,h4,h5,h6 {
        font-weight: normal;
    }
    h1 {
        ${theme.text.h1}
    }
    h2 {
        ${theme.text.h2}
    }
    h3 {
        ${theme.text.h3}
    }
    h4 {
        ${theme.text.h4}
    }
    h5 {
        ${theme.text.h5}
    }
    h6 {
        ${theme.text.h6}
    }

    a {
        text-decoration: none;
        color: ${theme.colors.colorOnBackground};
    }
    a:hover {
        color: ${theme.colors.colorPirmary};
    }

    html,
    body {
        background-color: ${theme.colors.colorBackground};
    }

    body {
        color: ${theme.colors.colorOnBackground};
        font-size: 16px;
    }

    html, body, #root {
        height: 100%;
    }

    input,
    textarea,
    select,
    button {
        -webkit-appearance: none;
        -moz-appearance: none;
        border: 0;
        outline: none;
    }

    * {
        box-sizing: border-box;
    }

    th {
        font-weight: normal;
    }

    ::-webkit-scrollbar {
        background: transparent;
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: gray;
        border-top: 1px solid ${theme.colors.colorBackground};
        border-left: 2px solid ${theme.colors.colorBackground};
        border-right: 2px solid ${theme.colors.colorBackground};
        border-bottom: 1px solid ${theme.colors.colorBackground};
        border-radius: 5px;
    }
`;

export default getGlobalStyle;
