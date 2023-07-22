import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import FormGroup from "./FormGroup";

function Signup() {
  const navigate = useNavigate();

  const initialValues = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values) => {
    // const url = "https://trainer-portal.surajmehta6.repl.co/login";
    // const data = {
    //   email: values.email,
    //   password: values.password,
    // };

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    //   credentials: "include",
    // });

    // if (res.status === 200 && res.ok) {
    //   navigate("/");
    // }
  };

  return (
    <div className="signup-page">
    <div className="signup-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <h2>Signup</h2>
          <FormGroup formName={"Username"} />
          <FormGroup formName={"Email"} />
          <FormGroup formName={"Password"} />
          <FormGroup formName={"Confirm Password"} />
          <button type="submit" class="login">Signup</button>
        </Form>
      </Formik>
    </div>
  </div>
  )
}

export default Signup

