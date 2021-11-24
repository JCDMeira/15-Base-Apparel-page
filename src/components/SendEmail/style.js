import styled from 'styled-components';

export const MyInput = styled.div`
  width: 31.1rem;
  height: 4.8rem;

  border: 1px solid var(--desaturated-red);
  box-sizing: border-box;
  border-radius: 30px;
  margin: 0 auto;
  padding-left: 2.4rem;
  display: flex;
  position: relative;

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
`;
