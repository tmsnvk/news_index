"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = require("styled-components");
const ComponentContainer = styled_components_1.default.p `
  padding: 1rem 0 0 2rem;
  font-size: ${({ theme }) => theme.fontSize.small};
  border-left: 5px solid ${({ theme }) => theme.color.grayDark};

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;
const ItemBody = ({ description }) => {
    return (jsx_runtime_1.jsx(ComponentContainer, { children: description }, void 0));
};
exports.default = ItemBody;
//# sourceMappingURL=ItemBody.js.map