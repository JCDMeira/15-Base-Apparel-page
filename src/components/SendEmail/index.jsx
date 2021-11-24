/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import arrow from '../../assets/images/icon-arrow.svg';
import { MyInput } from './style';

import error from '../../assets/images/icon-error.svg';

function SendEmail() {
  const [formValues, setFormValues] = useState({});

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  return (
    <MyInput>
      <form onSubmit={handleSubmit}>
        <input
          id="email"
          type="text"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          value={formValues.email || ''}
        />
        <button type="submit">
          <img src={arrow} alt="button" />
        </button>
      </form>
      <img className="error-image" src={error} alt="error" />
      <span className="error">Please provide a valid email</span>
    </MyInput>
  );
}

export { SendEmail };
