"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = require("styled-components");
const ComponentContainer = styled_components_1.default.p `
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: 600;
  letter-spacing: 0.1rem;
  text-align: center;
  margin: 5rem 0 0 0;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.large};
  }
`;
const Message = ({ message }) => {
    return (jsx_runtime_1.jsx(ComponentContainer, { children: message }, void 0));
};
exports.default = Message;
//# sourceMappingURL=Message.js.map