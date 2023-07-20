import "./App.css";
import Login from "./components/Login/Login";
// import Home from "./components/Home/Home";

import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
// import SignIn from './components/Login/SignIn'

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
