import React from 'react'
import { FieldArray } from 'formik'
import FormikField from './FormikField'
import FormikErrorMessage from './FormikErrorMessage'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function FormikFieldArray({values,name}) {
    return (
        <FieldArray name={name}>
                  {({ insert, remove, push }) => (
                    <div>
                      {values.hobbies.length > 0 &&
                        values.hobbies.map((friend, index) => (
                          <div className="d-flex justify-content-lg-between border p-3 mb-3 bg-light" key={index}>
                              <FormikField
                                name={`hobbies.${index}.name`}
                                label="Hobby Name"
                                type="text"
                                className="form-control"
                              />
                              <FormikErrorMessage
                                name={`hobbies.${index}.name`}
                              />
                              <FontAwesomeIcon
                                className="text-danger"
                                icon={faTrash}
                                onClick={() => remove(index)}
                              />
                          </div>
                        ))}
                      <button
                        type="button"
                        className="btn btn-danger mb-3"
                        onClick={() => push({ name: ""})}
                      >
                        Add Hobby
                      </button>
                    </div>
                  )}
                </FieldArray>
    )
}
