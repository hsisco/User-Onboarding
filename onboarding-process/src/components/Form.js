import React from 'react';
import ReactDom from 'react-dom';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { __values } from 'tslib';

function Form ({}) {
  return (
    <Form>
      <label>
        {touched.name && errors.name && <p>{errors.name}</p>}
        <Field
        type="text"
        name="name" />
        Name
      </label>
      <label>
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field
        type="email"
        name="email" />
        Email
      </label>
      <label>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field
        type="password"
        name="password" />
        Password
      </label>
      <label>
        {touched.accept && errors.accept && <p>{errors.accept}</p>}
        <Field
        type="checkbox"
        name="accept"
        checked={values.accept} />
        Accept Terms of Service
      </label>
      <button>Submit</button>
    </Form>
  );
}
export default Form;