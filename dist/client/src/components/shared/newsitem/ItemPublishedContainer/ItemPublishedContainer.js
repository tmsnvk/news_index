"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = require("styled-components");
const ComponentContainer = styled_components_1.default.div `
  display: flex;
  flex-direction: row;
  padding: 1rem 0 1rem 0;
  font-size: ${({ theme }) => theme.fontSize.default};
  font-weight: 600;
`;
const ItemPublishedAt = styled_components_1.default.p `
  padding: 0 1rem 0 0;
`;
const ItemPublishedBy = styled_components_1.default.p `
  color: ${({ theme }) => theme.color.greenDark};
`;
const ItemPublishedContainer = ({ publishedAt, source }) => {
    return (jsx_runtime_1.jsxs(ComponentContainer, { children: [jsx_runtime_1.jsx(ItemPublishedAt, { children: new Date(publishedAt).toLocaleString() }, void 0),
            jsx_runtime_1.jsx(ItemPublishedBy, { children: source === null || source === void 0 ? void 0 : source.name }, void 0)] }, void 0));
};
exports.default = ItemPublishedContainer;
//# sourceMappingURL=ItemPublishedContainer.js.map