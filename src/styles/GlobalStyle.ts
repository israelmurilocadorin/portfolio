import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root{
    --background-color: #007bff;
    --secondary-color: #6c767d;
    --background-dark-color: #10121A;
    --border-color: #2e344e;
    --background-light-color: #F1F1F1;
    --white-color: #FFF;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
    font-size: 1.1rem;
}

body{
    background-color: var(--background-dark-color);
    color: var(--font-light-color);
}

a{
    font-family: inherit;
    color: inherit;
    font-size: inherit;
}


`;

export default GlobalStyle;