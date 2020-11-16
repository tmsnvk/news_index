import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { MainPage, PageNotFound } from "components/pages";
import { ContentCategories, Footer, Navbar } from "components/components-main";
import theme from "utilities/theme/theme";
import useAnalyticsTracking from "utilities/analytics/useAnalyticsTracking";

const GlobalStyle = createGlobalStyle`
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
    color: ${({ theme }) => theme.color.primaryDark};
    background-color: ${({ theme }) => theme.color.primaryLight};
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

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  column-gap: 2em;
  row-gap: 2rem;
   
  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const App: FunctionComponent = () => {
  useAnalyticsTracking();

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <GlobalStyle />
          <Navbar />
          <ContentCategories />
          <Switch>
            <Route exact path={"/country/:countryId/category/:categoryId"} component={MainPage} />
            <Redirect exact path="/" to="/country/gb/category/general" />
            <Route component={PageNotFound} />
          </Switch>
          <Footer />
        </AppContainer>  
      </ThemeProvider>
    </Router>
  );
};

export default App;