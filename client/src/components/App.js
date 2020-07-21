import React from "react";
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
    --body-color-one: #f3f3f3; // light gray
    --body-color-two: #1d1d1d; // dark gray
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
    background-color: var(--body-color-one);
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

class App extends React.Component {

  state = { data: [], country: "GB" };

  async componentDidMount() {
    const response = await axios.get("/country/gb/category/general");
    
    this.setState({ data: response.data });
  }

  switchLanguage = async (event) => {
    const countryOptions = ["BG", "DE", "FR", "GB", "HU", "IT", "JP", "KR", "SE"];
    const countryLinkValue = event.target.innerText;
    
    this.setState({ country: countryLinkValue });

    try {
      for (let i = 0; i < countryOptions.length; i++) {
        if (countryLinkValue === countryOptions[i]) {
          const response = await axios.get(`/country/${countryOptions[i]}/category/general`);

          this.setState({ data: response.data });
        }
      }
    } catch (error) {
      return console.log("Something is not good - data fetch failed!");
    }
  };

  switchCategory = async (event) => {
    const categoryOptions = ["GENERAL", "BUSINESS", "TECHNOLOGY", "SCIENCE", "HEALTH", "ENTERTAINMENT"];
    const categoryLinkValue = event.target.innerText;

    try {
      for (let i = 0; i < categoryOptions.length; i++) {
        if (categoryLinkValue === categoryOptions[i]) {
          const response = await axios.get(`/country/${this.state.country}/category/${categoryOptions[i]}`);

          this.setState({ data: response.data });
        }
      }
    } catch (error) {
      return console.log("Something is not good - data fetch failed!");
    }
  }

  render() {
    return (
      <GridMainContainer>
        <GlobalStyle />
        <Navbar switchLanguage={this.switchLanguage} />
        <ContentCategories switchCategory={this.switchCategory} />
        <MainNewsItems data={this.state.data} />
        <SideNewsItems data={this.state.data} />
        <Footer />
      </GridMainContainer>  
    );
  }
};

export default App;