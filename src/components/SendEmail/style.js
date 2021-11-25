import styled from 'styled-components';

export const MyInput = styled.div`
  width: 82.93333333333334vw;
  max-width: 31.1rem;
  height: 4.8rem;

  border: ${(props) =>
    props.myError === true
      ? '2px solid var(--soft-red)'
      : '1px solid var(--desaturated-red)'};
  box-sizing: border-box;
  border-radius: 30px;
  margin: 0 auto;
  padding-left: 2.4rem;
  display: flex;
  position: relative;

  form {
    display: flex;
  }

  #email {
    width: 21rem;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;

    font-size: 1.4rem;
    line-height: 1.4rem;
    background-color: transparent;

    color: var(--desaturated-red);
  }
  #email::placeholder {
    color: var(--desaturated-red);
    font-size: 1.4rem;
    line-height: 1.4rem;
  }

  .error-image {
    width: 2.4rem;
    height: 2.4rem;
    position: absolute;
    top: 1rem;
    right: 7rem;
    display: ${(props) => (props.myError === true ? 'visible' : 'none')};
  }

  .error {
    position: absolute;
    top: 5.5rem;
    font-size: 1.2rem;
    color: var(--soft-red);
    display: ${(props) => (props.myError === true ? 'visible' : 'none')};
  }

  button {
    border: none;
    position: absolute;
    right: 0;
    top: -0.1rem;
    width: 64px;
    height: 48px;
    border-radius: 3rem;
    background-image: linear-gradient(135deg, #f8bfbf, #ee8c8c);
  }

  @media (min-width: 900px) {
    width: 44.6rem;
    height: 5.6rem;
    max-width: 44.6rem;
    padding-left: 3rem;

    #email {
      width: 32rem;

      font-size: 1.6rem;
      line-height: 1.6rem;
    }

    #email::placeholder {
      font-size: 1.6rem;
      line-height: 1.6rem;
    }
    button {
      border: none;
      position: absolute;
      right: 0;
      top: -0.1rem;
      width: 100px;
      height: 56px;
      border-radius: 3rem;
      background-image: linear-gradient(135deg, #f8bfbf, #ee8c8c);
    }

    .error-image {
      top: 1.6rem;
      right: 11.6rem;
    }

    .error {
      top: 6.5rem;
      font-size: 1.3rem;
    }
  }
`;
