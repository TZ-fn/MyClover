import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import TranslationContextProvider from "./providers/TranslationContextProvider.tsx";
import "styles/variables.scss";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TranslationContextProvider>
      <App />
    </TranslationContextProvider>
  </React.StrictMode>
);
