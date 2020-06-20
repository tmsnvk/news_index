import React from "react";
import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";
import Navbar from "./Navbar.js";
import ContentCategories from "./ContentCategories.js";
import NewsItems from "./NewsItems.js";
import Footer from "./Footer.js";

const GlobalStyle = createGlobalStyle`
* {
  --font-color-primary: #3d3d3d;
  --font-color-secondary: #f0f0f0;
  --font-color-tertiary: #ff9900;
  --body-color-primary: #f3f3f3;
  --body-color-secondary: #1d1d1d;
  --body-color-tertiary: #00af43;
  font-family: "Roboto", sans-serif;
  font-size: 62.5%;
  text-align: center;
  line-height: 1.5;
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
  color: var(--font-color-primary);
  background-color: var(--body-color-primary);
}
`;

const GridMainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 2em;
  row-gap: 2rem;
  grid-template-areas: 
  "grid-header grid-header"
  "grid-categories grid-categories"
  "grid-content-main grid-content-side"
  "grid-footer grid-footer";
`;

class App extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <GlobalStyle />
        <GridMainContainer>
          <Navbar />
          <ContentCategories />
          <NewsItems />
          <Footer />
        </GridMainContainer>
      </div>
    );
  }
};

export default App;