"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_dom_1 = require("react-dom");
const react_router_dom_1 = require("react-router-dom");
const App_1 = require("./components/App");
const MainContext_1 = require("./utilities/context/MainContext");
react_dom_1.default.render(jsx_runtime_1.jsx(react_router_dom_1.BrowserRouter, { children: jsx_runtime_1.jsx(MainContext_1.MainContextProvider, { children: jsx_runtime_1.jsx(App_1.default, {}, void 0) }, void 0) }, void 0), document.querySelector("#root"));
//# sourceMappingURL=index.js.map