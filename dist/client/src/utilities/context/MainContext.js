"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainContextProvider = exports.MainContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
exports.MainContext = react_1.createContext({});
const MainContextProvider = ({ children }) => {
    const [country, setCountry] = react_1.useState("gb");
    const [category, setCategory] = react_1.useState("general");
    const [pageTitle, setPageTitle] = react_1.useState("British");
    const [titleCategory, setTitleCategory] = react_1.useState("general");
    return (jsx_runtime_1.jsx(exports.MainContext.Provider, Object.assign({ value: { country, setCountry, category, setCategory, pageTitle, setPageTitle, titleCategory, setTitleCategory } }, { children: children }), void 0));
};
exports.MainContextProvider = MainContextProvider;
//# sourceMappingURL=MainContext.js.map