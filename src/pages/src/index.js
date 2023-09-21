import { createRoot } from "react-dom/client";
import App from "./App";
import Signup from "./pages/signup";

const root = createRoot(document.querySelector("#root"));

root.render(<Signup />);
