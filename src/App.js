import logo from "./logo.svg";
import "./App.css";
import { Formik, Form, Field } from "formik";
import React, { useState, useEffect, useRef } from "react";
import * as Yup from "yup";
import { Fragment } from "react/cjs/react.production.min";

function App() {
  const [initialValues, setInitialValues] = useState({
    country: "Sri Lanka",
  });
  const validationSchema = Yup.object().shape({
    country: Yup.string().required("Country is required"),
  });

  const [checked, setChecked] = useState();
  return (
    <div className="App">
      <header className="App-header">
        <Formik
          initialValues={initialValues}
          onSubmit={() => {}}
          validationSchema={validationSchema}
          enableReinitialize
        >
          {({
            isValid,
            dirty,
            handleChange,
            handleBlur,
            values,
            errors,
            setErrors,
          }) => {
            return (
              <Form>
                <div>
                    {checked?"checkbox":"non checked"}
                  <Field type="text" name="country" />
                </div>
                <div>
                  {checked ? (
                    <Fragment>
                      None of above{" "}
                      <input
                        type="checkbox"
                        checked
                        onChange={() => {
                          setChecked(!checked);
                          setErrors({});
                        }}
                      />
                    </Fragment>
                  ) : (
                    <Fragment>
                      None of above{" "}
                      <input
                        type="checkbox"
                        
                        onChange={() => {
                          setChecked(!checked);
                          setErrors({});
                        }}
                      />
                    </Fragment>
                  )}
                </div>

                <p>Errors : {JSON.stringify(errors)}</p>
              </Form>
            );
          }}
        </Formik>
      </header>
    </div>
  );
}

export default App;
