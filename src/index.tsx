import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { TaleProvider } from "./components/Context/TaleContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <TaleProvider>
      <Router>
        <App />
      </Router>
    </TaleProvider>
  </React.StrictMode>
);
