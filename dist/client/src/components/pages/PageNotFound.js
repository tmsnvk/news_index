"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const react_helmet_1 = require("react-helmet");
const styled_components_1 = require("styled-components");
const general_1 = require("../shared/general");
const ComponentContainer = styled_components_1.default.section `
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
  }
`;
const NavigationLink = styled_components_1.default(react_router_dom_1.Link) `
  color: ${({ theme }) => theme.color.greenDark};
  font-weight: 600;

  &:hover {
    color: inherit;
    text-decoration: underline;
  }
`;
const PageNotFound = () => {
    return (jsx_runtime_1.jsxs(ComponentContainer, { children: [jsx_runtime_1.jsx(react_helmet_1.Helmet, { children: jsx_runtime_1.jsx("title", { children: "404 - Page not found" }, void 0) }, void 0),
            jsx_runtime_1.jsx(general_1.Message, { message: jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: ["This page does not exist. Click ", jsx_runtime_1.jsx(NavigationLink, Object.assign({ to: "/" }, { children: "here" }), void 0), " to get back to the main page."] }, void 0) }, void 0)] }, void 0));
};
exports.default = PageNotFound;
//# sourceMappingURL=PageNotFound.js.map