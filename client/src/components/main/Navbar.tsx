import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PROJECT_ROOT } from "utilities/helpers/constants";
import { MainContext } from "utilities/context/MainContext";
import { trackClick } from "utilities/helpers/analytics";
import countryList from "utilities/data/texts/countryList";
import navbarTitle from "utilities/data/texts/navbarData";

const ComponentContainer = styled.nav`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.grayDark};
  color: ${({ theme }) => theme.color.grayLight};
  font-weight: 600;

  &:after {
    content: " ";
    display: block;
    width: 60%;
    margin: 2rem auto;
    border-bottom: 2px solid ${({ theme }) => theme.color.greenDark};
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
  }
`;

const LanguageLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const LanguageLink = styled(Link)`
  padding: 1rem 1rem 0 0;
  font-size: ${({ theme }) => theme.fontSize.small};
  text-transform: uppercase;

  &:hover {
    color: ${({ theme }) => theme.color.greenDark};
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

type TLogoTitle = {
  $position: string
}

const LogoTitle = styled.p<TLogoTitle>`
  padding: 0 0 0 2.5rem;
  font-size: ${({ $position }) => $position === "main" ? (({ theme }) => theme.fontSize.large) : (({ theme }) => theme.fontSize.medium)};

  &:first-of-type {
    padding: 2rem 0 0 2.5rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ $position }) => $position === "main" ? (({ theme }) => theme.fontSize.xxLarge) : (({ theme }) => theme.fontSize.large)};
  }
`;

const Navbar = () => {
  const { setCategoryCode, setCountryCode, setMetaTitle } = useContext(MainContext);

  // {countryCode}; param for data fetching and analytics tracking.
  // {metaTitle}; for head title element.
  const renderNavbarLinks = countryList.map(({ countryCode, metaTitle }) => {

    // sets context elements, sessionstorage element and analytics tracking when one of the links gets clicked.
    const handleOnClick = (): void => {
      setCountryCode(countryCode);
      setMetaTitle(metaTitle);
      setCategoryCode("general");
      sessionStorage.setItem("navCode", JSON.stringify({ countryCode, categoryCode: "general" }));
      trackClick(countryCode);
    };

    return (
      <LanguageLink key={countryCode} onClick={handleOnClick} to={`/${PROJECT_ROOT}/data/${countryCode}/general`}>
        {countryCode}
      </LanguageLink>
    );
  });

  return (
    <ComponentContainer>
      <LanguageLinksContainer>
        {renderNavbarLinks}
      </LanguageLinksContainer>
      <LogoTitle $position={"main"}>
        {navbarTitle.main}
      </LogoTitle>
      <LogoTitle $position={"sub"}>
        {navbarTitle.sub}
      </LogoTitle>
    </ComponentContainer>
  );
};

export default Navbar;