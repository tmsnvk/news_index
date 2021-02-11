import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Application from "components/Application";
import { MainContextProvider } from "utilities/context/MainContext";

ReactDOM.render(
  <BrowserRouter>
    <MainContextProvider>
      <Application />
    </MainContextProvider>
  </BrowserRouter>, document.querySelector("#root") as HTMLElement
);