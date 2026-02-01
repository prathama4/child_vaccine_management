import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChildProvider } from "./context/ChildContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChildProvider>
      <App />
    </ChildProvider>
  </React.StrictMode>
);
