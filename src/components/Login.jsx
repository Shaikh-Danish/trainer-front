import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate, } from "react-router-dom";
import { useEffect, useContext } from "react";

import LoginContext from "./utils/loginContext";
import FormGroup from "./FormGroup";


const LoginPage = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext)

  console.log(isLoggedIn, "login")
  
  useEffect(() => {
    if (isLoggedIn) navigate("/");
    
    // const url = "https://trainer-portal.surajmehta6.repl.co/authenticate";
    // const authenticate = async () => {
    //   const res = await fetch(url, {
    //     method: "GET",
    //     credentials: "include",
    //   });

    //   if (res.status === 200 && res.ok) {
    //     setIsLoggedIn(true) 
    //     return navigate("/");
    //   } 
    // };
    // authenticate();
  }, [navigate]);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values) => {
    const url = "https://trainer-portal.surajmehta6.repl.co/login";
    const data = {
      email: values.email,
      password: values.password,
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });

    if (res.status === 200 && res.ok) {
      navigate("/");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
          <h2>Login</h2>
            <FormGroup formName="Email" type="email" />
            <FormGroup formName="Password" type="password" />
            <button type="submit" className="login">Login</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
