import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import Login from "./components/Login";
import Home from "./components/Home";
import Header from "./components/Header";
import Signup from "./components/Signup";
import LoginContext from "./components/utils/loginContext";
import Loader from './components/Loader';

import { authenticate } from "./components/utils/authenticate";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isAuthenticated = async () => {
      const { status } = await authenticate()
      setIsLoggedIn(status);
      setLoading(false);
    }

    isAuthenticated()
  }, [])

  return (
    <>
      {loading 
        ? <Loader /> 
        : isLoggedIn !== "undefined" &&
        <LoginContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
        </LoginContext.Provider>
      }
    </>
  );
}

export default App;
