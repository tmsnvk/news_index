import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MainContext } from "utilities/context/MainContext";
import countryList from "utilities/helpers/resources/countryList";
import trackClick from "utilities/analytics/trackEvent";

const ComponentContainer = styled.section`
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

const LanguageLinks = styled(Link)`
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

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 5rem 0 2.5rem;
`;

const LogoMain = styled.p`
  font-size: ${({ theme }) => theme.fontSize.large};

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.xxLarge};
  }
`;

const LogoSub = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium};

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.large};
  }
`;

const Navbar = () => {
  const { setCategory, setCountry, setPageTitle, setTitleCategory } = useContext(MainContext);

  const renderNavbar = countryList.map(({ code, title }) => {
    const handleOnClick = () => {
      setCountry(code);
      setPageTitle(title);
      setTitleCategory("general");
      setCategory("general");
      trackClick(code);
    };

    return (
      <LanguageLinks key={code} onClick={handleOnClick} to={`/country/${code}/category/general`}>
        {code}
      </LanguageLinks>
    );
  });

  return (
    <ComponentContainer>
      <LanguageLinksContainer>
        {renderNavbar}
      </LanguageLinksContainer>
      <LogoContainer>
        <LogoMain>_news.Index</LogoMain>
        <LogoSub>the latest & most important news in one place</LogoSub>
      </LogoContainer>
    </ComponentContainer>
  );
};

export default Navbar;