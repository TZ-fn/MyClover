import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "styles/variables.scss";
import "./index.scss";
import TranslationContextProvider from "./providers/TranslationContextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TranslationContextProvider>
      <App />
    </TranslationContextProvider>
  </React.StrictMode>
);
