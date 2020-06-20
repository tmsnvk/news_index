import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import { createStore } from "redux";

import App from "./components/App.js";
// import reducers from "./reducers/index.js";

// ReactDOM.render(
//   <Provider store={createStore(reducers)}>
//     <App />
//   </Provider>, document.querySelector("#root")
// );

ReactDOM.render(
    <App />, 
    document.querySelector("#root")
);