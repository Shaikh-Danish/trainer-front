import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

import FormGroup from "./FormGroup";
import LoginContext from "./utils/loginContext";

function Signup() {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);

  useEffect(() => {
    if (isLoggedIn) {
      return navigate("/") 
    }
  }, [isLoggedIn]);

  const initialValues = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().label("user name").required("user name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmpassword: Yup.string().label('confirm password').required().oneOf([Yup.ref('password'), null], 'Passwords must match'),
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
                <FormGroup formName={"Username"} type="text" />
                <FormGroup formName={"Email"} type="email" />
                <FormGroup formName={"Password"} type="password" />
                <FormGroup formName={"Confirm Password"} type="password" />
                <button type="submit" className="signup">Signup</button>
            </Form>
        </Formik>
        </div>
    </div>
  )
}

export default Signup

