"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const GlobalStyle = styled_components_1.createGlobalStyle `
  * {
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  html,
  body {
    width: 100vw;
    height: 100vh;
    font-family: ${({ theme }) => theme.fontFamily.main};
    color: ${({ theme }) => theme.color.grayDark};
    background-color: ${({ theme }) => theme.color.grayLight};
    font-size: 62.5%;
    line-height: 1.5;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }
`;
exports.default = GlobalStyle;
//# sourceMappingURL=GlobalStyle.js.map