"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = require("styled-components");
const general_1 = require("../../general");
const ComponentContainer = styled_components_1.default.section `
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 4;
  grid-row-end: 5;
  margin: 2.5rem 0 2.5rem 0;
  min-height: 100vh;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
  }
`;
const ErrorMessage = () => {
    return (jsx_runtime_1.jsxs(ComponentContainer, { children: [jsx_runtime_1.jsx(general_1.Message, { message: "The server is currently unavailable." }, void 0),
            jsx_runtime_1.jsx(general_1.Message, { message: "Please try again later!" }, void 0)] }, void 0));
};
exports.default = ErrorMessage;
//# sourceMappingURL=ErrorMessage.js.map