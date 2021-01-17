"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const styled_components_1 = require("styled-components");
const ComponentContainer = styled_components_1.default.section `
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 5;
  grid-row-end: 6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.grayDark};
  color: ${({ theme }) => theme.color.grayLight};
  text-align: center;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    flex-direction: row;
  }
`;
const CopyrightColumnContainer = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  padding: 0 0 1.5rem 0;
  font-size: ${({ theme }) => theme.fontSize.default};
  color: ${({ theme }) => theme.color.greenDark};
  font-weight: 600;
  letter-spacing: 0.2rem;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    padding: 0 1rem 1rem 1rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    padding: 0 3.5rem 1rem 3.5rem;
  }
`;
const CopyrightRow = styled_components_1.default.p `
  padding: 1rem 0 0 0;
`;
const LinkColumnContainer = styled_components_1.default(CopyrightColumnContainer) `
  color: ${({ theme }) => theme.color.grayLight};
`;
const LinkColumn = styled_components_1.default(react_router_dom_1.Link) `
  color: inherit;
  padding: 1rem 0 0 0;

  &:hover {
    color: ${({ theme }) => theme.color.greenDark};
  }
`;
const LinkColumnSpan = styled_components_1.default.span `
  color: ${({ theme }) => theme.color.orangeDark};
`;
const Footer = () => {
    return (jsx_runtime_1.jsxs(ComponentContainer, { children: [jsx_runtime_1.jsxs(CopyrightColumnContainer, { children: [jsx_runtime_1.jsx(CopyrightRow, { children: "\u00A9 2020 - 2021 tamasnvk" }, void 0),
                    jsx_runtime_1.jsx(CopyrightRow, { children: "built with \u2764" }, void 0),
                    jsx_runtime_1.jsx(CopyrightRow, { children: "using react & newsapi.org" }, void 0)] }, void 0),
            jsx_runtime_1.jsxs(LinkColumnContainer, { children: [jsx_runtime_1.jsx(LinkColumn, Object.assign({ to: "/" }, { children: "Facebook" }), void 0),
                    jsx_runtime_1.jsx(LinkColumn, Object.assign({ to: "/" }, { children: "Twitter" }), void 0),
                    jsx_runtime_1.jsx(LinkColumn, Object.assign({ to: "/" }, { children: "YouTube" }), void 0)] }, void 0),
            jsx_runtime_1.jsxs(LinkColumnContainer, { children: [jsx_runtime_1.jsx(LinkColumn, Object.assign({ to: "/" }, { children: "Complaints & corrections" }), void 0),
                    jsx_runtime_1.jsx(LinkColumn, Object.assign({ to: "/" }, { children: "Privacy" }), void 0),
                    jsx_runtime_1.jsx(LinkColumn, Object.assign({ to: "/" }, { children: "Terms & conditions" }), void 0),
                    jsx_runtime_1.jsx(LinkColumn, Object.assign({ to: "/" }, { children: "Help" }), void 0),
                    jsx_runtime_1.jsx(LinkColumn, Object.assign({ to: "/" }, { children: "Sitemap" }), void 0)] }, void 0),
            jsx_runtime_1.jsxs(LinkColumnContainer, { children: [jsx_runtime_1.jsx(LinkColumn, Object.assign({ to: "/" }, { children: "Work with us" }), void 0),
                    jsx_runtime_1.jsx(LinkColumn, Object.assign({ to: "/" }, { children: "Advertise with us" }), void 0),
                    jsx_runtime_1.jsx(LinkColumn, Object.assign({ to: "/" }, { children: "Partner with us" }), void 0)] }, void 0),
            jsx_runtime_1.jsxs(LinkColumnContainer, { children: [jsx_runtime_1.jsx(LinkColumn, Object.assign({ to: "/" }, { children: "Contact us" }), void 0),
                    jsx_runtime_1.jsx(LinkColumn, Object.assign({ to: "/" }, { children: "Newsletter" }), void 0),
                    jsx_runtime_1.jsx(LinkColumn, Object.assign({ to: "/" }, { children: jsx_runtime_1.jsx(LinkColumnSpan, { children: "Subscription" }, void 0) }), void 0)] }, void 0)] }, void 0));
};
exports.default = Footer;
//# sourceMappingURL=Footer.js.map