"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = require("styled-components");
const ComponentContainer = styled_components_1.default.div `
  padding: 0 0 0 2rem;
  border-left: 5px solid ${({ theme }) => theme.color.grayDark};
`;
const Link = styled_components_1.default.a `
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: 600;
  color: ${({ theme }) => theme.color.greenDark};
  text-transform: uppercase;

  &:hover {
    color: inherit;
    text-decoration: underline;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    font-size: ${({ theme }) => theme.fontSize.large};
  }
`;
const ItemTitleLink = ({ title, url }) => {
    return (jsx_runtime_1.jsx(ComponentContainer, { children: jsx_runtime_1.jsx(Link, Object.assign({ href: url }, { children: title }), void 0) }, void 0));
};
exports.default = ItemTitleLink;
//# sourceMappingURL=ItemTitleLink.js.map