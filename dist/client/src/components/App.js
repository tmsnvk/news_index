"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const styled_components_1 = require("styled-components");
const pages_1 = require("./pages");
const main_1 = require("./main");
const theme_1 = require("../utilities/theme/theme");
const GlobalStyle_1 = require("../utilities/theme/GlobalStyle");
const useAnalyticsTracking_1 = require("../utilities/analytics/useAnalyticsTracking");
const AppContainer = styled_components_1.default.main `
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  column-gap: 2em;
  row-gap: 2rem;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-template-columns: 1fr 1fr;
  }
`;
const App = () => {
    useAnalyticsTracking_1.default();
    return (jsx_runtime_1.jsx(react_router_dom_1.BrowserRouter, { children: jsx_runtime_1.jsx(styled_components_1.ThemeProvider, Object.assign({ theme: theme_1.default }, { children: jsx_runtime_1.jsxs(AppContainer, { children: [jsx_runtime_1.jsx(GlobalStyle_1.default, {}, void 0),
                    jsx_runtime_1.jsx(main_1.Navbar, {}, void 0),
                    jsx_runtime_1.jsx(main_1.ContentCategories, {}, void 0),
                    jsx_runtime_1.jsxs(react_router_dom_1.Switch, { children: [jsx_runtime_1.jsx(react_router_dom_1.Route, { exact: true, path: "/country/:countryId/category/:categoryId", component: pages_1.MainPage }, void 0),
                            jsx_runtime_1.jsx(react_router_dom_1.Redirect, { exact: true, path: "/", to: "/country/gb/category/general" }, void 0),
                            jsx_runtime_1.jsx(react_router_dom_1.Route, { component: pages_1.PageNotFound }, void 0)] }, void 0),
                    jsx_runtime_1.jsx(main_1.Footer, {}, void 0)] }, void 0) }), void 0) }, void 0));
};
exports.default = App;
//# sourceMappingURL=App.js.map