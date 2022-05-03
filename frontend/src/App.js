import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AdminDashboard from "./components/Admin/AdminDashboard";
import UserDashboard from "./components/User/UserDashboard";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={[<NavBar />, <Home />]} />
          <Route path="/login" element={[<NavBar />, <Login />]} />
          <Route path="/register" element={[<NavBar />, <Register />]} />
          <Route
            path="/user-dashboard/:firstName"
            element={[<NavBar />, <UserDashboard />]}
          />

          <Route
            path="/admin-dashboard/:firstName"
            element={[ <AdminDashboard />]}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
