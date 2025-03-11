import './styles/App.css';
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import React from 'react';




function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (username, password) => {
    if (username === "username" && password === "password") {
      setIsAuthenticated(true);
      navigate("/home"); // ✅ Redirect to Home after login
    } else {
      alert("Invalid usename or password");
    }
  };

  return (
    <div className="App">
      <Navbar />
      {isAuthenticated ? <Outlet /> : <Login onLogin={handleLogin} />}
    </div>
  );
}


export default App;
