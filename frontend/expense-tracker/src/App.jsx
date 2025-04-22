import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Dashboard/Home";
import Income from "./pages/Dashboard/Income";
import Expense from "./pages/Dashboard/Expense";
import Profile from "./pages/Dashboard/Profile";
import UserProvider from "./context/UserContext";
import { DashboardProvider } from "./context/DashboardContext";

const App = () => {
  return (
    <UserProvider>
      <DashboardProvider>
        <div>
          <Router>
            <Routes>
              <Route path="/" element={<Root />} />
              <Route path="/login" exact element={<Login />} />
              <Route path="/signUp" exact element={<SignUp />} />
              <Route path="/dashboard" exact element={<Home />} />
              <Route path="/income" exact element={<Income />} />
              <Route path="/expense" exact element={<Expense />} />
              <Route path="/profile" exact element={<Profile />} />
            </Routes>
          </Router>
        </div>
      </DashboardProvider>
    </UserProvider>
  );
};

export default App;

const Root = () => {
  // check if token exists in localstorage
  const isAuthenticated = !!localStorage.getItem("token");

  // if authenticated, redirect to dashboard
  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  );
};
