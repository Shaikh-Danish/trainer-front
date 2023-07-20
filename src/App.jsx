import "./App.css";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

import { Route, Routes } from "react-router-dom";
// import SignIn from './components/Login/SignIn'

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
