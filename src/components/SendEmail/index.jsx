import React from 'react';

import arrow from '../../assets/images/icon-arrow.svg';
import { MyInput } from './style';

function SendEmail() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('e-mail enviado');
  }
  return (
    <MyInput>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input required id="email" type="email" placeholder="Email Address" />
        <button type="submit">
          <img src={arrow} alt="button" />
        </button>
        <span className="error">Please provide a valid email</span>
      </form>
    </MyInput>
  );
}

export { SendEmail };
