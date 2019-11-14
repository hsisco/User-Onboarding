import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {
  Card,
  CardDeck,
  Button,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardImg
} from 'reactstrap';

const OnboardingForm = ({ touched, status, errors, values }) => {
  const [users, setUsers] = useState([]);
  const [number, setNumber] = useState(1);
  useEffect(() => {
    if (status) {
      setUsers([...users, status]);
      setNumber(number + 1);
    }
  }, [status]);
  return (
    <>
      <Form>
      <label>
        Name
        {touched.name && errors.name && <p>{errors.name}</p>}
        <Field
        type="text"
        name="name" />
      </label>
      <label>
        Role
      <Field name="role" className="role" component="select">
            <option>Choose one</option>
            <option value="WebDev">WebDev</option>
            <option value="DataScientist">Data Scientist</option>
            <option value="UXDesigner">UX Designer</option>
            <option value="Audience">Just here for the show</option>
          </Field>
          </label>
      <label>
      Email
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field
        type="email"
        name="email" />
        
      </label>
      <label>
      Password
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field
        type="password"
        name="password" />
      </label>
      <label>
      <label>
      I accept the Terms of Service
            <Field type="checkbox" name="checkbox" checked={values.tos} />
            {touched.checkbox && errors.checkbox && <p>{errors.checkbox}</p>}
            <span className="checkmark" />
          </label>
      </label>
          <Button type="submit" className="btn">Submit!</Button>
        </Form>
      <CardDeck>
        {users.map(user => (
          <div className="card">
            <Card key={user.id}>
              <CardHeader tag="h3">Name: {user.name}</CardHeader>
              <CardBody>
                <CardTitle>Role: {user.role}</CardTitle>
                <CardImg
                  name="img"
                  className="img"
                  top
                  src={`https://api.adorable.io/avatars/${number}`}
                  alt="Adorable Avatar's API"
                />
                <CardText>Age: {user.age}</CardText>
                <CardText>Email: {user.email}</CardText>
              </CardBody>
            </Card>
          </div>
        ))}
      </CardDeck>
    </>
  );
};
const FormikForm = withFormik({
  mapPropsToValues({ name, password, email, role, age, img, checkbox }) {
    return {
      name: name || "",
      password: password || "",
      email: email || "",
      checkbox: checkbox || "",
      role: role || "",
      age: age || "",
      img: img || ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Name is a Required Field !"),
    password: Yup.string().min(4, "Password must be at least 8 characters in length")
    .required("Password is required"),
    age: Yup.string().required("Age is required"),
    email: Yup.string().required("Email is required"),
    checkbox: Yup.string().required("Please Accept the Terms Of Service !")
  }),
  handleSubmit(values, { setStatus }) {
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        console.log("Nope, the handleSubmit isn't working.", res);
        setStatus(res.data);
      })
      .catch(err => {
        console.log("This is the err res:", err.res);
      });
  }
})(OnboardingForm);

export default FormikForm;