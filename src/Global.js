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
    padding-top: 7.4rem;
    margin-bottom: 3.1rem;
    width: 100%;
    img {
      width: 100%;
    }
  }

  .info {
    h1 {
      font-weight: normal;
      font-size: 3rem;
      line-height: 3.2rem;

      text-align: center;
      letter-spacing: 0.28em;

      color: var(--dark-grayish-red);

      text-transform: uppercase;

      span {
        display: block;
        font-weight: 300;
        font-size: 3.2rem;
        letter-spacing: 0.23em;

        color: var(--desaturated-red);

        /* padding: 0 9.1rem 0 7.9rem; */
        /* margin-left: 0.9rem; */
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
    margin-bottom: 1.2rem;
    padding: 0 4rem 0 3.9rem;
  }

  @media (min-width: 375px) {
    .image {
      padding-top: 8.4rem;
      margin-bottom: 6.1rem;
    }
    .info {
      h1 {
        font-size: 4rem;
        line-height: 4.2rem;

        span {
          font-size: 4.2rem;
        }
      }

      p {
        margin-bottom: 3.2rem;
      }
    }
  }

  @media (min-width: 900px) {
    display: flex;
    flex-direction: row-reverse;

    .logo {
      top: 6.4rem;
      left: 16.5rem;
      width: 15.8rem;
      height: 3.4rem;
    }

    .image {
      width: 42.36111111111111vw;
      padding: 0;

      img {
        width: 42.36111111111111vw;
        height: 100vh;
      }
    }

    .info {
      width: 57.5vw;
      padding: 23.2rem 21.8rem 0 16.4rem;

      h1 {
        font-size: 6.6rem;
        line-height: 7rem;

        letter-spacing: 0.25em;
        text-align: left;


        span {
          font-size:  6.6rem;
          line-height: 6.6rem;
          letter-spacing: 0.24em;
        }
      }

      p {
        font-size: 1.6rem;
        line-height: 2.8rem;
        text-align: left;
        padding: 0;
        margin-top: 2.1rem;
        margin-bottom: 3.9rem;

      }
    }
    }

    @media (min-width: 1500px) {
      .info{
        padding: 0 15%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
