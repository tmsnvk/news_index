"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const react_ga_1 = require("react-ga");
const useAnalyticsTracking = () => {
    const location = react_router_dom_1.useLocation();
    react_1.useEffect(() => {
        react_ga_1.default.initialize(process.env.REACT_APP_GA_KEY);
        react_ga_1.default.pageview(location.pathname + location.search);
    }, [location]);
};
exports.default = useAnalyticsTracking;
//# sourceMappingURL=useAnalyticsTracking.js.map