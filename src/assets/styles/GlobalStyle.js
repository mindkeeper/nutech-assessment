import { createGlobalStyle } from "styled-components";
import { variables } from ".";

export const GlobalStyle = createGlobalStyle`

    ${variables}
    html{
        box-sizing: border-box;
        width: 100%;
        scroll-behavior: smooth;

    }
    *,
    *:before,
    *:after{
        box-sizing: inherit;
        padding: 0;
        margin: 0;
    }
    body{
        max-width: 100wh;
        color: black;
        padding: 0;
        margin: 0;
        font-family: 'Poppins', sans-serif;
    }
`;
