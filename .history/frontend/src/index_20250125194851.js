// /frontend/src/index.js

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css"; // Assuming you have a global styles file

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
