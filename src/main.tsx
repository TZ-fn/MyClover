import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import TranslationContextProvider from "./providers/TranslationContextProvider.tsx";
import "styles/variables.scss";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TranslationContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TranslationContextProvider>
  </React.StrictMode>
);
