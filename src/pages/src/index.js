import { createRoot } from "react-dom/client";
import Signup from "./pages/signup";
import Navbar from "./pages/navbar";

function Cadastro() {
  return (
    <div>
      <Navbar />
      <Signup />
    </div>
  );
}
const root = createRoot(document.querySelector("#root"));
root.render(<Cadastro />);
