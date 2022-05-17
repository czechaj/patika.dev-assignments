import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MarkdownProvider } from "./contexts/MarkdownContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MarkdownProvider>
      <App />
    </MarkdownProvider>
  </React.StrictMode>
);
