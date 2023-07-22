import { Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Signup from "./components/Signup";
import "./App.css";

function App() {
  return (
    <>
      <Header isLoggedIn={false}/>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        {/* <Route exact path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </>
  );
}

export default App;
