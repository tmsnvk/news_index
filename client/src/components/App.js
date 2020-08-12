import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Navbar from "./Navbar";
import ContentCategories from "./ContentCategories";
import MainNewsItems from "./MainNewsItems";
import SideNewsItems from "./SideNewsItems";
import Footer from "./Footer";
import { color, font, fontsize, mediaq } from "../variables/styling";

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
    color: ${color.font.main};
    background-color: ${color.background.mainLight};
    font-family: ${font.main};
    font-size: 62.5%;
    line-height: 1.5;
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

  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 2em;
    grid-row-gap: 2rem;
    grid-template-areas:
    "grid-header"
    "grid-categories"
    "grid-content-main"
    "grid-content-side"
    "grid-footer";
  }
`;

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
        setSideNewsData(data.slice(4, 14));
      } catch (error) {
        return console.log("Something is not good - data fetch has failed!");
      }
    };

    response();
  }, [country, category]);

  return (
    <GridMainContainer>
      <GlobalStyle />
      <Navbar countrySelection={(country) => {setCountry(country)}} categorySelection={(category) => {setCategory(category)}} />
      <ContentCategories country={country} categorySelection={(category) => {setCategory(category)}} />
      <MainNewsItems mainNewsData={mainNewsData} />
      <SideNewsItems sideNewsdata={sideNewsdata} />
      <Footer />
    </GridMainContainer>  
  );
};

export default App;


// change how you define grid / take a look at your flexbox
// revise divs and styled components
// fix mediaqueries from max to min