import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

function OnboardForm ({ values, errors, touched }) {
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

const FormikOnboardForm = withFormik({
  mapPropsToValues({ name, email, password, accept }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      accept: accept || false
    };
  },

  validationSchema: Yup.object().shape({
    text: Yup.string()
    .name("Please enter your name")
    .required("Name is required"),
    email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
    password: Yup.string()
    .min(8, "Password must be at least 8 characters in length")
    .required("Password is required"),
  }),

  handleSubmit(values) {
    console.log(values);
  }

})(OnboardForm)

export default FormikOnboardForm;