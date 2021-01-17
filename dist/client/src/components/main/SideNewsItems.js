"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = require("styled-components");
const newsitem_1 = require("../shared/newsitem");
const ComponentContainer = styled_components_1.default.section `
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 4;
  grid-row-end: 5;
  width: 90%;
  margin: 0 auto;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
  }
`;
const SideNewsItems = ({ sideNewsdata }) => {
    const renderSideNewsItems = sideNewsdata.map(({ description, publishedAt, source, title, url }) => {
        return (jsx_runtime_1.jsxs(newsitem_1.ItemContainer, { children: [jsx_runtime_1.jsx(newsitem_1.ItemPublishedContainer, { publishedAt: publishedAt, source: source }, void 0),
                jsx_runtime_1.jsx(newsitem_1.ItemTitleLink, { title: title, url: url }, void 0),
                jsx_runtime_1.jsx(newsitem_1.ItemBody, { description: description }, void 0)] }, title));
    });
    return (jsx_runtime_1.jsx(ComponentContainer, { children: renderSideNewsItems }, void 0));
};
exports.default = SideNewsItems;
//# sourceMappingURL=SideNewsItems.js.map