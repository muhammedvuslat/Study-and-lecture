import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
    box-sizing: border-box;;
    margin: 0;
    padding: 0;
    
    }
    body{
        background-color: ${({ theme }) => theme.colors.body};
        color: #00252e;
        font-family: sans-serif;
        font-size: 1.1rem;

    }
    p{
        opacity: 0.6;
        line-height: 1.5;

    }
`;
