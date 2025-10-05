import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import CounterUseState from "./pages/CounterUseState";
import CounterUseReducer from "./pages/CounterUseReducer";

const App = () => {
  return (
    <div>
      <nav>
              <Link to="/">Home</Link> |
              <Link to="/about">About</Link>|
              <Link to="/users">Users</Link> |
              <Link to="/add-user">Add User</Link> |
              <Link to="/counter-usestate">Counter (useState)</Link> |
              <Link to="/counter-usereducer">Counter (useReducer)</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} /> 
              <Route path="/add-user" element={<AddUser />} />
              <Route path="/counter-usestate" element={<CounterUseState />} />
              <Route path="/counter-usereducer" element={<CounterUseReducer />} />
      </Routes>
    </div>
  );
};

export default App;