"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = require("styled-components");
const newsitem_1 = require("../shared/newsitem");
const notfound_png_1 = require("../../assets/images/notfound.png");
const ComponentContainer = styled_components_1.default.section `
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  width: 90%;
  margin: 0 auto;
`;
const MainNewsItems = ({ mainNewsData }) => {
    const handleOnError = (event) => event.target.src = notfound_png_1.default;
    const renderMainNewsItems = mainNewsData.map(({ description, publishedAt, source, title, url, urlToImage }) => {
        return (jsx_runtime_1.jsxs(newsitem_1.ItemContainer, { children: [urlToImage !== null ? jsx_runtime_1.jsx(newsitem_1.ItemImage, { src: urlToImage, alt: title, onError: handleOnError }, void 0) : jsx_runtime_1.jsx(newsitem_1.ItemImage, { src: notfound_png_1.default, alt: "image not found" }, void 0),
                jsx_runtime_1.jsx(newsitem_1.ItemPublishedContainer, { publishedAt: publishedAt, source: source }, void 0),
                jsx_runtime_1.jsx(newsitem_1.ItemTitleLink, { title: title, url: url }, void 0),
                jsx_runtime_1.jsx(newsitem_1.ItemBody, { description: description }, void 0)] }, title));
    });
    return (jsx_runtime_1.jsx(ComponentContainer, { children: renderMainNewsItems }, void 0));
};
exports.default = MainNewsItems;
//# sourceMappingURL=MainNewsItems.js.map