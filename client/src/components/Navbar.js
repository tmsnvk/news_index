import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const GridHeaderContainer = styled.section`
  grid-area: grid-header;
  font-weight: bold;
  color: var(--font-color-two);
  background-color: var(--body-color-one);

  &:after {
    content: " ";
    display: block;
    border-bottom: 2px solid var(--body-color-three);
    width: 60%;
    margin: 2rem auto;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 10rem;

  @media only screen and (max-width: 992px) {
    padding: 0 0 0 5rem;
  }
`;

const LanguageLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const LanguageLinks = styled(Link)`
  color: inherit;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.5rem;
  padding: 0.5rem 1rem 0 0;

  &:hover {
    text-decoration: none;
    color: var(--font-color-three);
  }

  @media only screen and (max-width: 992px) {
    font-size: 1.2rem;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleMain = styled.div`
  font-family: "Montserrat", sans-serif;
  display: flex;
  font-size: 3rem;
`;

const TitleSub = styled.div`
  font-family: "Montserrat", sans-serif;
  display: flex;
  font-size: 1.5rem;

  @media only screen and (max-width: 992px) {
    font-size: 1.2rem;
  }
`;

const Navbar = ({ countrySelection, categorySelection }) => {
  const countries = ["bg", "de", "fr", "gb", "hu", "it", "jp", "kr", "se"];

  const renderNavbar = countries.map((country) => {
    return (
      <LanguageLinks key={country} onClick={(event) => {countrySelection(event.target.innerText.toLowerCase()); categorySelection("general")}} to={`/country/${country}/category/general`}>{country}</LanguageLinks>
    );
  });

  return (
    <GridHeaderContainer>
      <Header>
        <LanguageLinksContainer>
          {renderNavbar}
        </LanguageLinksContainer>
        <Title>
          <TitleMain>_news.Index</TitleMain>
          <TitleSub>the latest & most important news in one place.</TitleSub>
        </Title>
      </Header>
    </GridHeaderContainer>
  );
};

export default Navbar;