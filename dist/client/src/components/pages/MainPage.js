"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const axios_1 = require("axios");
const MainContext_1 = require("../../utilities/context/MainContext");
const main_1 = require("../main");
const utilities_1 = require("../shared/utilities");
const MainPage = () => {
    const { country, category } = react_1.useContext(MainContext_1.MainContext);
    const [mainNewsData, setMainNewsData] = react_1.useState([]);
    const [sideNewsdata, setSideNewsData] = react_1.useState([]);
    const [isLoading, setIsLoading] = react_1.useState(false);
    const [isError, setIsError] = react_1.useState(false);
    react_1.useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const { data } = await axios_1.default.get(`/country/${country}/category/${category}`, { headers: { "Content-Type": "application/json" }, timeout: 10000 });
                setMainNewsData(data.slice(0, 3));
                setSideNewsData(data.slice(3, 15));
                setTimeout(() => setIsLoading(false), 500);
            }
            catch (error) {
                setIsError(true);
                return console.log(`===> The error is - ${error} <===`);
            }
        };
        fetchData();
        return () => {
            setMainNewsData([]);
            setSideNewsData([]);
            setIsLoading(false);
            setIsError(false);
        };
    }, [country, category]);
    return (jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [isError ? jsx_runtime_1.jsx(utilities_1.ErrorMessage, {}, void 0) : null,
            !isError && isLoading ? jsx_runtime_1.jsx(utilities_1.LoadingMessage, {}, void 0) : jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsx(main_1.MainNewsItems, { mainNewsData: mainNewsData }, void 0), jsx_runtime_1.jsx(main_1.SideNewsItems, { sideNewsdata: sideNewsdata }, void 0)] }, void 0)] }, void 0));
};
exports.default = MainPage;
//# sourceMappingURL=MainPage.js.map