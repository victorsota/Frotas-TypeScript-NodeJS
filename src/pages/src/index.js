import React from "react";
import { createRoot } from "react-dom";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Navbar from "./pages/navbar";
import Menu from "./pages/menu";
import NovoVeiculoPage from "./pages/veiculos/novo";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import VeiculosList from "./pages/veiculos/listar";

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
      <Menu />
      <VeiculosList />
    </div>
  );
}

function NovoVeiculo() {
  return (
    <div>
      <Menu />
      <NovoVeiculoPage />
    </div>
  );
}

function PrivateRoute({ element, path }) {
  const token = localStorage.getItem("authToken");
  console.log("Token:", token);
  console.log("Path:", path);

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
      <Route
        path="/veiculos/novo"
        element={<PrivateRoute element={<NovoVeiculo />} />}
      />
    </Routes>
  </Router>
);
