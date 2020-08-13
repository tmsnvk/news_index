import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { color, font, fontsize, mediaq } from "../variables/styling";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  font-weight: bold;
  color: ${color.font.mainLight};
  background-color: ${color.background.main};
  display: flex;
  flex-direction: column;

  &:after {
    content: " ";
    display: block;
    border-bottom: 2px solid ${color.background.secondary};
    width: 60%;
    margin: 2rem auto;
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
  font-size: ${fontsize.small};
  padding: 1rem 1rem 0 0;

  &:hover {
    text-decoration: none;
    color: ${color.font.secondary};
  }

  @media only screen and (min-width: ${mediaq.medium}) {
    font-size: ${fontsize.medium};
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 5rem 0 2.5rem;
`;

const LogoMain = styled.div`
  font-family: ${font.secondary};
  font-size: ${fontsize.large};

  @media only screen and (min-width: ${mediaq.medium}) {
    font-size: ${fontsize.extraLarge};
  }
`;

const LogoSub = styled.div`
  font-family: ${font.secondary};
  font-size: ${fontsize.small};

  @media only screen and (min-width: ${mediaq.medium}) {
    font-size: ${fontsize.medium};
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
    <ComponentContainer>
      <LanguageLinksContainer>
        {renderNavbar}
      </LanguageLinksContainer>
      <LogoContainer>
        <LogoMain>_news.Index</LogoMain>
        <LogoSub>the latest & most important news in one place.</LogoSub>
      </LogoContainer>
    </ComponentContainer>
  );
};

export default Navbar;