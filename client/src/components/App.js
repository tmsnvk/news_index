import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import axios from "axios";
import Navbar from "./Navbar";
import ContentCategories from "./ContentCategories";
import MainNewsItems from "./MainNewsItems";
import SideNewsItems from "./SideNewsItems";
import Footer from "./Footer";
import ReactGA from "react-ga";

const theme = {
  fontColor: {
    mainDark: "#1d1d1d", // dark gray
    mainLight: "#f3f3f3", // light gray
    secondary: "#00af43", // green
    alternate: "#ff9900", // orange
  },
  backgroundColor: {
    mainDark: "#1d1d1d", // dark gray
    mainLight: "#f3f3f3", // light gray
    secondary: "#00af43", // green
  },
  fontFamily: {
    main: `"Roboto", sans-serif`,
    secondary: `"Montserrat", sans-serif`
  },
  fontSize: {
    default: "1rem",
    small: "1.2rem",
    medium: "1.5rem",
    large: "2rem",
    xLarge: "3rem"
  },
  mediaQueries: {
    extraSmall: "320px",
    small: "480px",
    medium: "768px",
    large: "992px",
    xLarge: "1200px"
  }
};

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
    font-family: ${props => props.theme.fontFamily.main};
    color: ${props => props.theme.fontColor.mainDark};
    background-color: ${props => props.theme.backgroundColor.mainLight};
    font-size: 62.5%;
    line-height: 1.5;
  }
`;

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-column-gap: 2em;
  grid-row-gap: 2rem;
   
  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    grid-template-columns: 1fr 1fr;
  }
`;

ReactGA.initialize(process.env.REACT_APP_GA_KEY);
ReactGA.pageview("/");

const App = () => {
  const [mainNewsData, setMainNewsData] = useState([]);
  const [sideNewsdata, setSideNewsData] = useState([]);
  const [country, setCountry] = useState("gb");
  const [category, setCategory] = useState("general");

  useEffect(() => {
    const response = async () => {
      try {
        const { data } = await axios.get(`/country/${country}/category/${category}`);
        setMainNewsData(data.slice(0, 3)); 
        setSideNewsData(data.slice(3, 15));
        console.log("*****************\n**Data fetched!**\n*****************");
      } catch (error) {
        return console.log(`Data fetch has failed. Please check the following error message - ${error}`);
      }
    };

    response();
  }, [country, category]);

  const countrySelection = (country) => setCountry(country);
  const categorySelection = (category) => setCategory(category);

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <GlobalStyle />
        <Navbar countrySelection={countrySelection} categorySelection={categorySelection} />
        <ContentCategories country={country} categorySelection={categorySelection} />
        <MainNewsItems mainNewsData={mainNewsData} />
        <SideNewsItems sideNewsdata={sideNewsdata} />
        <Footer />
      </AppContainer>  
    </ThemeProvider>
  );
};

export default App;