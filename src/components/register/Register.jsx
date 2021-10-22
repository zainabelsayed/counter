import React from "react";
import { Form, Formik } from "formik";
import * as yup from "yup";
import FormikField from "./FormikField";
import FormikSelect from "./FormikSelect";
import FormikFieldArray from "./FormikFieldArray";

export default function Register() {
  const initialValues = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    active: false,
    gender: "",
    hobbies: [],
  };
  const onSubmit = (values) =>
    alert(`userName:${values.userName}
  Email:${values.email}
  Password:${values.password}
  Conformed Password:${values.confirmPassword}
  Active:${values.active}
  Gender:${values.gender}
  hobbies:${values.hobbies.map((hobby) => hobby.name)}
  `);
  const validationSchema = yup.object({
    userName: yup.string().required("This Field Is Required"),
    email: yup
      .string()
      .email("Please Enter A Valid Email Address")
      .required("This Field Is Required"),
    password: yup.string().required("This Field Is Required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("This Field Is Required"),
    gender: yup.string().required("This Field Is Required"),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ values }) => {
          return (
            <Form>
              <div
                className="container w-50 p-5 border border-2 shadow rounded-3"
                style={{ marginTop: "7rem" }}
              >
                <h1 className="text-primary mb-5">Register</h1>
                <FormikField
                  label="User Name"
                  name="userName"
                  type="text"
                  className="form-control"
                />
                <FormikField
                  label="Email Address"
                  name="email"
                  type="email"
                  className="form-control"
                />
                <FormikField
                  label="Password"
                  name="password"
                  type="password"
                  className="form-control"
                />
                <FormikField
                  label="Confirmed Password"
                  name="confirmPassword"
                  type="password"
                  className="form-control"
                />
                <FormikField
                  label="Active"
                  name="active"
                  type="checkbox"
                  className="form-check-input"
                />
                <FormikSelect
                  label="Gender"
                  name="gender"
                  option1="Male"
                  option2="Female"
                />
                <FormikFieldArray name="hobbies" values={values} />
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}
