import { createGlobalStyle } from "styled-components";

import SeoulHangang from "../fonts/seoulhangangcondensed-light.ttf";
import ShareTech from "../fonts/ShareTech-Regular.ttf";
import SpaceMono from "../fonts/SpaceMono-Bold.ttf";
import Spartan from "../fonts/Spartan-Bold.ttf";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0em;
        margin: 0em;
        box-sizing: border-box;
    }

    body, html{
        height: 100vh;
        width: 100vw;
    }

    @font-face {
        font-family: SeoulHangang;
        src: url(${SeoulHangang}) format('truetype');
    }

    @font-face {
        font-family: ShareTech;
        src: url(${ShareTech}) format('truetype');
    }

    @font-face {
        font-family: SpaceMono;
        src: url(${SpaceMono}) format('truetype');
        font-weight: bold;
    }

    @font-face {
        font-family: Spartan;
        src: url(${Spartan}) format('truetype');
        font-weight: bold;
    }
`;

export default GlobalStyle;
