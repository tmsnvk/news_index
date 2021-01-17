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
  margin: 5rem 0 10rem 0;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
  }
`;
const LoadingMessage = () => {
    return (jsx_runtime_1.jsx(ComponentContainer, { children: jsx_runtime_1.jsx(general_1.Message, { message: "Loading the requested news category..." }, void 0) }, void 0));
};
exports.default = LoadingMessage;
//# sourceMappingURL=LoadingMessage.js.map