import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import styled, { ThemeProvider } from "styled-components";
import theme from "utilities/theme/theme";
import GlobalStyle from "utilities/theme/GlobalStyle";
import { usePageTracking } from "utilities/helpers/analytics";
import { PROJECT_ROOT } from "utilities/helpers/constants";
import { MainPage, PageNotFound } from "components/pages";
import { ContentCategories, Footer, Navbar } from "components/main";

const MainContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  column-gap: 2em;
  row-gap: 2rem;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Application = () => {
  // initiates react-query.
  const queryClient = new QueryClient();

  // initiates analytics tracking.
  usePageTracking("home");

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <MainContainer>
          <QueryClientProvider client={queryClient}>
          <ContentCategories />
          <Switch>
            <Route exact path={`/${PROJECT_ROOT}/data/:countryId/:categoryId`} component={MainPage} />
            <Redirect exact path={`/${PROJECT_ROOT}`} to={`/${PROJECT_ROOT}/data/gb/general`} />
            <Route component={PageNotFound} />
          </Switch>
          </QueryClientProvider>
        </MainContainer>
        <Footer />
      </ThemeProvider>
    </Router>
  );
};

export default Application;