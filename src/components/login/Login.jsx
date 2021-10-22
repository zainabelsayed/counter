import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

export default function Login() {
  const initialValues = {
    email: "",
    password: "",
    rememberMe: false,
  };
  const onSubmit = (values) => console.log(JSON.stringify(formik, null, 4));
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Please Enter A Valid Email Address")
      .required("This Field Is Required"),
    password: yup.string().required("This Field Is Required"),
  });
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <form
      className="container w-50 p-5 border border-2 shadow rounded-3"
      style={{ marginTop: "7rem" }}
      onSubmit={formik.handleSubmit}
    >
      <h1 className="text-primary mb-5">Login</h1>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          {...formik.getFieldProps("email")}
          aria-describedby="emailHelp"
        />
        {formik.touched.email && formik.errors.email && (
          <div className="text-danger">{formik.errors.email}</div>
        )}
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          {...formik.getFieldProps("password")}
        />
        {formik.touched.password && formik.errors.password && (
          <div className="text-danger">{formik.errors.password}</div>
        )}
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="rememberMe"
          name="rememberMe"
          {...formik.getFieldProps("rememberMe")}
        />
        <label className="form-check-label">Remember Me</label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
