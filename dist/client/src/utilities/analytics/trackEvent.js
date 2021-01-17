"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_ga_1 = require("react-ga");
const trackClick = (id) => {
    react_ga_1.default.event({
        category: id,
        action: "category / country click"
    });
};
exports.default = trackClick;
//# sourceMappingURL=trackEvent.js.map