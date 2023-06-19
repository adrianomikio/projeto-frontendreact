import { createGlobalStyle } from "styled-components";
import Background from "./image/backgroundsite.png"

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0px;
    background-image: url(${Background});
    width: 1366px;
    font-family: Helvetica;
    color: rgb(222, 222, 157);
}`