import { createRoot } from "react-dom/client";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Navbar from "./pages/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Cadastro() {
  return (
    <div>
      <Navbar />
      <Signup />
    </div>
  );
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
      <Route path="/signup" element={<Cadastro />}></Route>
      <Route path="/login" element={<Start />}></Route>
    </Routes>
  </Router>
);
