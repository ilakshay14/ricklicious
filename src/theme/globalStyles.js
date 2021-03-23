import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html,body{
        width: 100%;
        height: 100%;
        color: ${({ theme }) => theme?.text || '#000'};
        background: ${({ theme }) => theme?.background || '#fff'};
        font-family: 'Roboto Mono', monospace;
        font-size: 100%;
    }

    * {
        padding: 0;
        margin: 0;
    }
`;

export default GlobalStyle;