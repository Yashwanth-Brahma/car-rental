import React from "react";
import ReactDOM from "react-dom";
import "./assets/main.css";
import App from "./App";
import { FormProvider } from "./context/FormProvider";

ReactDOM.render(
  <React.StrictMode>
    <FormProvider>
      <App />
    </FormProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
