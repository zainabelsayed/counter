import React from 'react'
import { Field } from 'formik'
import FormikErrorMessage from './FormikErrorMessage'

export default function FormikField({name, type, label,className}) {
    return (
        <Field name={name}>
                  {(formikField) => {
                    return (
                      <div className="mb-3">
                        <label htmlFor={name} className="mb-2">{label}</label>
                        <input
                          type={type}
                          className={className}
                          id={name}
                          name={name}
                          {...formikField.field}
                        />
                        <FormikErrorMessage name={name}/>
                      </div>
                    );
                  }}
                </Field>
    )
}
