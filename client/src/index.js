import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { MainContextProvider } from "./utilities/context/MainContext";
import App from "./components/App";

ReactDOM.render(
  <BrowserRouter>
    <MainContextProvider>
    	<App />
    </MainContextProvider>
  </BrowserRouter>,
  document.querySelector("#root")
);