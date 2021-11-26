/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { isEmail } from 'validator';

import arrow from '../../assets/images/icon-arrow.svg';
import { MyInput } from './style';

import error from '../../assets/images/icon-error.svg';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

function SendEmail() {
  const [formValues, setFormValues] = useState({});
  const [myError, setMyError] = useState(false);

  const notify = () => toast.success('Email successfully sent ');

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    if (data.email === '' || !isEmail(data.email)) setMyError(true);
    if (isEmail(data.email)) {
      setMyError(false);
      setFormValues({});
      notify();
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  return (
    <>
      <MyInput myError={myError}>
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
      {/* <ToastContainer autoClose={3000} /> */}
    </>
  );
}

export { SendEmail };
