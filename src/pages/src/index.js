import React from "react";
import { createRoot } from "react-dom";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Navbar from "./pages/navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import VeiculosList from "./pages/veiculos";

function Cadastro() {
  return (
    <div>
      <Navbar />
      <Signup />
    </div>
  );
}

function Veiculos() {
  return (
    <div>
      <Navbar />
      <VeiculosList />
    </div>
  );
}

function PrivateRoute({ element, path }) {
  const token = localStorage.getItem("authToken");

  if (path === "/login" || path === "/signup") {
    return element;
  }

  return token ? element : <Navigate to="/login" />;
}

function Start() {
  return (
    <div>
      <Navbar />
      <Login />
    </div>
  );
}

const root = createRoot(document.querySelector("#root"));

root.render(
  <Router>
    <Routes>
      <Route path="/signup" element={<Cadastro />} />
      <Route path="/login" element={<Start />} />
      <Route
        path="/veiculos"
        element={<PrivateRoute element={<Veiculos />} />}
      />
    </Routes>
  </Router>
);
