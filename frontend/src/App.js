import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AdminDashboard from "./components/Admin/AdminDashboard";
import UserDashboard from "./components/User/UserDashboard";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import PrivateRoute from "./components/Routes/PrivateRoute";
import UserProfile from "./components/User/UserProfile";
import Viewcart from "./components/ViewCart/Viewcart";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={[<NavBar />, <Home />]} />
          <Route path="/about" element={[<NavBar />, <About />]} />
          <Route path="/services" element={[<NavBar />, <Services />]} />
          <Route path="/contact" element={[<NavBar />, <Contact />]} />
          <Route path="/login" element={[<NavBar />, <Login />]} />
          <Route path="/register" element={[<NavBar />, <Register />]} />

          <Route
            path="/user-dashboard/:firstName"
            element={
              <PrivateRoute>
                <NavBar />
                <UserDashboard />
              </PrivateRoute>
            }
          />

          <Route
            path="/admin-dashboard/:firstName"
            element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            }
          />

          <Route
            path="/admin-dashboard/:firstName/profile/:id"
            element={
              <PrivateRoute>
                <UserProfile />
              </PrivateRoute>
            }
          />

          <Route
            path="/user-dashboard/:firstName/viewcart"
            element={
              <PrivateRoute>
                <NavBar />
                <Viewcart />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
