import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";

const App = () => {
  return (
    <div>
      <nav>
              <Link to="/">Home</Link> |
              <Link to="/about">About</Link>|
              <Link to="/users">Users</Link> |
              <Link to="/add-user">Add User</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} /> 
              <Route path="/add-user" element={<AddUser />} />
      </Routes>
    </div>
  );
};

export default App;