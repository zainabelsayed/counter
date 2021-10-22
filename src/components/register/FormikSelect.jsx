import React from 'react'
import { Field } from 'formik';
import FormikErrorMessage from './FormikErrorMessage';

export default function FormikSelect({name,label,option1,option2}) {
    return (
        <Field name={name}>
                  {(formikField) => {
                    return (
                      <div className="mb-3">
                        <label className="mb-2">{label}</label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          id={name}
                          name={name}
                          {...formikField.field}
                        >
                          <option value={option1}>{option1}</option>
                          <option value={option2}>{option2}</option>
                        </select>
                        <FormikErrorMessage name={name}/>
                      </div>
                    );
                  }}
                </Field> 
    )
}
