import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { createGlobalStyle } from "styled-components";
import { color, font, mediaq } from "../variables/styling";
import Navbar from "./Navbar";
import ContentCategories from "./ContentCategories";
import MainNewsItems from "./MainNewsItems";
import SideNewsItems from "./SideNewsItems";
import Footer from "./Footer";

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

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-column-gap: 2em;
  grid-row-gap: 2rem;
     
  @media only screen and (min-width: ${mediaq.medium}) {
    grid-template-columns: 1fr 1fr;
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
        return console.log(`Data fetch has failed - ${error}`);
      }
    };

    response();
  }, [country, category]);

  return (
    <AppContainer>
      <GlobalStyle />
      <Navbar countrySelection={(country) => {setCountry(country)}} categorySelection={(category) => {setCategory(category)}} />
      <ContentCategories country={country} categorySelection={(category) => {setCategory(category)}} />
      <MainNewsItems mainNewsData={mainNewsData} />
      <SideNewsItems sideNewsdata={sideNewsdata} />
      <Footer />
    </AppContainer>  
  );
};

export default App;