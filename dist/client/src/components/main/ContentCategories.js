"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const react_helmet_1 = require("react-helmet");
const styled_components_1 = require("styled-components");
const MainContext_1 = require("../../utilities/context/MainContext");
const categoryList_1 = require("../../utilities/helpers/resources/categoryList");
const trackEvent_1 = require("../../utilities/analytics/trackEvent");
const ComponentContainer = styled_components_1.default.section `
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
    width: 100%;
  }
`;
const ContentCategoryLinks = styled_components_1.default(react_router_dom_1.Link) `
  margin: 1rem 0 1rem 0;
  padding: 0 1rem 0 1rem;
  font-size: ${({ theme }) => theme.fontSize.default};
  color: ${({ theme }) => theme.color.grayDark};
  font-weight: 600;
  letter-spacing: 0.2rem;
  text-transform: uppercase;

  &:hover {
    color: ${({ theme }) => theme.color.greenDark};
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.small};
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    margin: 2rem 0 2rem 0;
    padding: 0 2rem 0 2rem;
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;
const ContentCategories = () => {
    const { country, setCategory, pageTitle, titleCategory, setTitleCategory } = react_1.useContext(MainContext_1.MainContext);
    const renderContentCategories = categoryList_1.default.map((category) => {
        const handleOnClick = () => {
            setCategory(category);
            setTitleCategory(category);
            trackEvent_1.default(category);
        };
        return (jsx_runtime_1.jsx(ContentCategoryLinks, Object.assign({ onClick: handleOnClick, to: `/country/${country}/category/${category}` }, { children: category }), category));
    });
    return (jsx_runtime_1.jsxs(ComponentContainer, { children: [jsx_runtime_1.jsx(react_helmet_1.Helmet, { children: jsx_runtime_1.jsx("title", { children: `${pageTitle} ${titleCategory} news` }, void 0) }, void 0), renderContentCategories] }, void 0));
};
exports.default = ContentCategories;
//# sourceMappingURL=ContentCategories.js.map