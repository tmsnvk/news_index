import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { MainPage, PageNotFound } from "components/pages";
import { ContentCategories, Footer, Navbar } from "components/main";
import theme from "utilities/theme/theme";
import GlobalStyle from "utilities/theme/GlobalStyle";
import useAnalyticsTracking from "utilities/analytics/useAnalyticsTracking";
import { PROJECT_ROOT } from "utilities/constants/urls";

const AppContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  column-gap: 2em;
  row-gap: 2rem;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const App = () => {
  useAnalyticsTracking();

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <GlobalStyle />
          <Navbar />
          <ContentCategories />
        <Switch>
          <Route exact path={`/${PROJECT_ROOT}/data/:countryId/:categoryId`} component={MainPage} />
          <Redirect exact path={`/${PROJECT_ROOT}`} to={`/${PROJECT_ROOT}/data/gb/general`} />
          <Route component={PageNotFound} />
        </Switch>
          <Footer />
        </AppContainer>
      </ThemeProvider>
    </Router>
  );
};

export default App;