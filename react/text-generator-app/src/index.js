import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ParagraphProvider } from "./contexts/ParagraphContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ParagraphProvider>
      <App />
    </ParagraphProvider>
  </React.StrictMode>
);
