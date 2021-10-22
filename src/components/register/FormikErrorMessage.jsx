import React from "react";
import { ErrorMessage } from "formik";

export default function FormikErrorMessage({ name }) {
  return (
    <ErrorMessage name={name}>
      {(errorMessage) => {
        return <div className="text-danger">{errorMessage}</div>;
      }}
    </ErrorMessage>
  );
}
