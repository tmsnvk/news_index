import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Navbar from "./Navbar";
import ContentCategories from "./ContentCategories";
import MainNewsItems from "./MainNewsItems";
import SideNewsItems from "./SideNewsItems";
import Footer from "./Footer";

const GlobalStyle = createGlobalStyle`
  * {
    --font-color-one: #1d1d1d; // dark gray
    --font-color-two: #f3f3f3; // light gray
    --font-color-three: #00af43; // green
    --font-color-four: #ff9900; // orange
    --body-color-one: #1d1d1d; // dark gray
    --body-color-two: #f3f3f3; // light gray
    --body-color-three: #00af43; // green
    font-family: "Roboto", sans-serif;
    font-size: 62.5%;
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
    color: var(--font-color-one);
    background-color: var(--body-color-two);
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
  const [data, setData] = useState([]);
  const [country, setCountry] = useState("gb");
  const [category, setCategory] = useState("general");

  useEffect(() => {
    const response = async () => {
      try {
        const { data } = await axios.get(`/country/${country}/category/${category}`);
        setData(data); 
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
      <MainNewsItems data={data} />
      <SideNewsItems data={data} />
      <Footer />
    </GridMainContainer>  
  );
};

export default App;