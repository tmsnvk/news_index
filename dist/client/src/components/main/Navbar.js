"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const styled_components_1 = require("styled-components");
const MainContext_1 = require("../../utilities/context/MainContext");
const countryList_1 = require("../../utilities/helpers/resources/countryList");
const trackEvent_1 = require("../../utilities/analytics/trackEvent");
const ComponentContainer = styled_components_1.default.section `
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.grayDark};
  color: ${({ theme }) => theme.color.grayLight};
  font-weight: 600;

  &:after {
    content: " ";
    display: block;
    width: 60%;
    margin: 2rem auto;
    border-bottom: 2px solid ${({ theme }) => theme.color.greenDark};
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
  }
`;
const LanguageLinksContainer = styled_components_1.default.div `
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
const LanguageLinks = styled_components_1.default(react_router_dom_1.Link) `
  padding: 1rem 1rem 0 0;
  font-size: ${({ theme }) => theme.fontSize.small};
  text-transform: uppercase;

  &:hover {
    color: ${({ theme }) => theme.color.greenDark};
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;
const LogoContainer = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  padding: 2rem 5rem 0 2.5rem;
`;
const LogoMain = styled_components_1.default.p `
  font-size: ${({ theme }) => theme.fontSize.large};

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.xxLarge};
  }
`;
const LogoSub = styled_components_1.default.p `
  font-size: ${({ theme }) => theme.fontSize.medium};

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.large};
  }
`;
const Navbar = () => {
    const { setCategory, setCountry, setPageTitle, setTitleCategory } = react_1.useContext(MainContext_1.MainContext);
    const renderNavbar = countryList_1.default.map(({ code, title }) => {
        const handleOnClick = () => {
            setCountry(code);
            setPageTitle(title);
            setTitleCategory("general");
            setCategory("general");
            trackEvent_1.default(code);
        };
        return (jsx_runtime_1.jsx(LanguageLinks, Object.assign({ onClick: handleOnClick, to: `/country/${code}/category/general` }, { children: code }), code));
    });
    return (jsx_runtime_1.jsxs(ComponentContainer, { children: [jsx_runtime_1.jsx(LanguageLinksContainer, { children: renderNavbar }, void 0),
            jsx_runtime_1.jsxs(LogoContainer, { children: [jsx_runtime_1.jsx(LogoMain, { children: "_news.Index" }, void 0),
                    jsx_runtime_1.jsx(LogoSub, { children: "the latest & most important news in one place" }, void 0)] }, void 0)] }, void 0));
};
exports.default = Navbar;
//# sourceMappingURL=Navbar.js.map