import { createGlobalStyle } from "styled-components";
import { background, color } from "../styles/Box";
const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
    margin: 0;
    border: 0;
    outline: 0;
        box-sizing:border-box;
    }
    html,body{
        
        min-width:100%;
        min-height: 100vh;
        background:${background};
    }

`;
export default GlobalStyle;
