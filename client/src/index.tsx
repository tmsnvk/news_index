import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "components/App";
import { MainContextProvider } from "utilities/context/MainContext";

ReactDOM.render(
  <BrowserRouter>
    <MainContextProvider>
    	<App />
    </MainContextProvider>
  </BrowserRouter>,
  document.querySelector("#root") as HTMLElement
);