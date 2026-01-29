import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./pages/ccs/general.css";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
