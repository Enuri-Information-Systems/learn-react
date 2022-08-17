import logo from "./logo.svg";
import "./App.css";
import { Formik, Form, Field } from "formik";
import React, { useState, useEffect, useRef } from "react";
import * as Yup from "yup";

import { TextField } from "@mui/material";

import { Autocomplete } from "formik-mui";
const options = ["Baseball", "Basket ball", "Hokey"];
function App() {
  const [initialValues, setInitialValues] = useState({
    category: "",
  });
  const validationSchema = Yup.object().shape({
    pickedDate: Yup.string().required("Country is required"),
  });

  const [checked, setChecked] = useState();

  const handleDateChange = (e) => {
    setChecked(e.target.value);
  };

  const datePicker = useRef();
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
                Values : {JSON.stringify(values)}
                {/* initialValues : {JSON.stringify(initialValues)} */}

                <Field
                  
                  freeSolo
                  options={options}
                  component={Autocomplete}
                  name="category"
                  renderInput={(params) => <TextField label="Category" {...params} />}
                />
              </Form>
            );
          }}
        </Formik>
      </header>
    </div>
  );
}

export default App;
