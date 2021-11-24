import styled, { createGlobalStyle } from 'styled-components';

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

export const Conteiner = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(135deg, #fff, #fff5f5);

  .logo {
    position: absolute;
    width: 10rem;
    height: 2.1rem;
    top: 3.1rem;
    left: 3.2rem;
  }

  .image {
    margin-top: 8.4rem;
    margin-bottom: 6.2rem;
  }

  .info {
    h1 {
      font-weight: normal;
      font-size: 4rem;
      line-height: 4.2rem;

      text-align: center;
      letter-spacing: 0.28em;

      color: var(--dark-grayish-red);

      text-transform: uppercase;

      span {
        display: block;
        font-weight: 300;
        font-size: 4.2rem;
        letter-spacing: 0.23em;

        color: var(--desaturated-red);

        padding: 0 9.1rem 0 7.9rem;
        margin-left: 0.9rem;
      }
    }
  }

  p {
    font-weight: normal;
    font-size: 1.4rem;
    line-height: 2.2rem;

    text-align: center;

    color: #ce9797;

    margin-top: 1.5rem;
    margin-bottom: 3.7rem;
    padding: 0 4rem 0 3.9rem;
  }
`;
