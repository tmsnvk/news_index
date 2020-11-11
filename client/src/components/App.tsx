import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../utilities/context/MainContext";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import axios from "axios";
import { ContentCategories, Footer, MainNewsItems, Navbar, SideNewsItems } from "./maincomponents";
import theme from "../utilities/theme/theme";
import ReactGA, { InitializeOptions } from "react-ga";

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

// type Tracker = {
//   trackingCode: string;
// } & InitializeOptions;

// ReactGA.initialize<Tracker>(process.env.REACT_APP_GA_KEY, { standardImplementation: true });
// ReactGA.pageview("/");

type NewsData = {
  description: string;
  publishedAt: string;
  source?: {
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}[]

const App: React.FunctionComponent = () => {
  const { country, category } = useContext(MainContext);

  const [mainNewsData, setMainNewsData] = useState<NewsData | []>([]);
  const [sideNewsdata, setSideNewsData] = useState<NewsData | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get<NewsData>(`/country/${country}/category/${category}`, { headers: { "Content-Type": "application/json" }});
        setMainNewsData(data.slice(0, 3)); 
        setSideNewsData(data.slice(3, 15));
      } catch (error) {
        return console.log(`Data fetch has failed. Please see the following error message - ${error}`);
      }
    };

    fetchData();
    return () => {
      setMainNewsData([]);
      setSideNewsData([]);
    }
  }, [country, category]);

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <GlobalStyle />
        <Navbar />
        <ContentCategories />
        <MainNewsItems mainNewsData={mainNewsData} />
        <SideNewsItems sideNewsdata={sideNewsdata} />
        <Footer />
      </AppContainer>  
    </ThemeProvider>
  );
};

export default App;