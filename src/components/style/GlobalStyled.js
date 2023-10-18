import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    :root{
        /* Fonts */
        --font-pretendard: Pretendard;
        --font-audiowide: Audiowide;
        --font-roboto: Roboto;      
        /* Colors */
        --white: #fff;
        --black: #000;
        --gray-bold: #4a4a4a;
        --gray-light: #939393;
        --color-gray-100: rgba(255, 255, 255, 0.7);
        --color-red: #ff0000;

    }    
`;