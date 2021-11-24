import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --desaturated-red: #CE9797;
    --soft-red: #F96262;
    --dark-grayish-red: #413A3A;
    --white: #fff
    --light: #FFF5F5;
    --light-salmon:#F8BFBF;
    --salmon: #EE8C8C;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
    font-family: "Josefin Sans";
  }
`;
