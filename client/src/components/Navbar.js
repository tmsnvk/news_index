import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  font-weight: bold;
  color: ${props => props.theme.fontColor.mainLight};
  background-color: ${props => props.theme.backgroundColor.mainDark};
  display: flex;
  flex-direction: column;

  &:after {
    content: " ";
    display: block;
    border-bottom: 2px solid ${props => props.theme.backgroundColor.secondary};
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
  font-size: ${props => props.theme.fontSize.small};
  padding: 1rem 1rem 0 0;

  &:hover {
    text-decoration: none;
    color: ${props => props.theme.fontColor.secondary};
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    font-size: ${props => props.theme.fontSize.medium};
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 5rem 0 2.5rem;
`;

const LogoMain = styled.div`
  font-family: ${props => props.theme.fontFamily.secondary};
  font-size: ${props => props.theme.fontSize.large};

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    font-size: ${props => props.theme.fontSize.extraLarge};
  }
`;

const LogoSub = styled.div`
  font-family: ${props => props.theme.fontFamily.secondary};
  font-size: ${props => props.theme.fontSize.small};

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    font-size: ${props => props.theme.fontSize.medium};
  }
`;

const Navbar = ({ countrySelection, categorySelection }) => {
  const countries = ["bg", "de", "fr", "gb", "hu", "it", "jp", "kr", "se"];
  
  const renderNavbar = countries.map((country) => {
    const handleOnClick = () => {
      countrySelection(country); 
      categorySelection("general");
    };

    return (
      <LanguageLinks key={country} onClick={handleOnClick} to={`/country/${country}/category/general`}>{country}</LanguageLinks>
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