import React from 'react';

import arrow from '../../assets/images/icon-arrow.svg';
import { MyInput } from './style';

function SendEmail() {
  return (
    <MyInput>
      <input type="email" placeholder="Email address" />
      <button type="submit">
        <img src={arrow} alt="button" />
      </button>
    </MyInput>
  );
}

export { SendEmail };
