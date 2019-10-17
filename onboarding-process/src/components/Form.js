import React from 'react';
import ReactDom from 'react-dom';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function Form ({}) {
  return (
    <Form>
      <label>
        <Field
        type="text"
        name="name"
        />
        Name
      </label>
      <label>
        <Field
        type="email"
        name="email"
        />
        Email
      </label>
      <label>
        <Field
        type="password"
        name="password"
        />
        Password
      </label>
      <label>
        <Field
        type="checkbox"
        name="accept"

        />
        Accept Terms of Service
      </label>
      <button>Submit</button>
    </Form>
  );
}
export default Form;