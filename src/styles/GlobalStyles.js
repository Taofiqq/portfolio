import {createGlobalStyle} from 'styled-components';


 const GlobalStyles = createGlobalStyle`
    /* Body Font */
    @import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400;1,500&display=swap');
    /* root variables */
    /* :root {
        --body-color: #2D2424;
        --body-font: 'Work Sans', sans-serif
    } */

    * {
        margin: 0;
        padding: 0;
        list-style-type: none;
        text-decoration: none;
        font-family: 'Work Sans', sans-serif;
    }
   
    body {
        background-color: var(--body-color);
        color: white
    }

    
` 

export default GlobalStyles;