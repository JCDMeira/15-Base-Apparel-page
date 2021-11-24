import React from 'react';

import arrow from '../../assets/images/icon-arrow.svg';
import { MyInput } from './style';

function SendEmail() {
  return (
    <MyInput>
      <input id="email" type="email" placeholder="Email Address" />
      <button type="submit">
        <img src={arrow} alt="button" />
      </button>
    </MyInput>
  );
}

export { SendEmail };
