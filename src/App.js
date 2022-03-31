import logo from "./logo.svg";
import "./App.css";
import { Formik, Form, Field } from "formik";
import React, { useState, useEffect, useRef } from "react";
import * as Yup from "yup";
import { Fragment } from "react/cjs/react.production.min";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import { TimePicker, DateTimePicker } from "@material-ui/pickers";
import { DatePicker } from 'formik-material-ui';
function App() {
  const [initialValues, setInitialValues] = useState({
    pickedDate: "",
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
    <MuiPickersUtilsProvider utils={MomentUtils}>
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
                  {/* <Field
                  type="date"
                  name="country"
                  placeholder="dd-mm-yyyy"
                  min="1997-01-01"
                  max="2022-03-28"
                  value={values.country}
                 
                /> */}

                  {/* 27-03-2022 */}

                  {/* <p>Errors : {JSON.stringify(errors)}</p> */}
                  <p>Picked date : {JSON.stringify(values.country)}</p>

                  <Field
                     component={DatePicker}
                     label="label"
                     name="pickedDate"
                     textField={{ helperText: 'Helper text' }}
                     inputFormat="MM/dd/yyyy"
                  />
                </Form>
              );
            }}
          </Formik>
        </header>
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default App;
