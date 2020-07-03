import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const GridHeaderContainer = styled.section`
  grid-area: grid-header;
  font-weight: bold;
  color: var(--font-color-secondary);
  background-color: var(--body-color-secondary);

  &:after {
    content: " ";
    display: block;
    border-bottom: 2px solid var(--body-color-tertiary);
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
  font-size: 1.5rem;
  padding: 0.5rem 1rem 0 0;

  &:hover {
    text-decoration: none;
    color: var(--body-color-tertiary);
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

class Navbar extends React.Component {
  handleSwitchLanguage = (event) => {
    this.props.switchLanguage(event);
  }

  render() {
    return (
      <GridHeaderContainer>
        <Header>
          <LanguageLinksContainer>
            <LanguageLinks onClick={this.handleSwitchLanguage} to="/country/bg">BG</LanguageLinks>
            <LanguageLinks onClick={this.handleSwitchLanguage} to="/country/de">DE</LanguageLinks>
            <LanguageLinks onClick={this.handleSwitchLanguage} to="/country/fr">FR</LanguageLinks>
            <LanguageLinks onClick={this.handleSwitchLanguage} to="/country/gb">GB</LanguageLinks>
            <LanguageLinks onClick={this.handleSwitchLanguage} to="/country/hu">HU</LanguageLinks>
            <LanguageLinks onClick={this.handleSwitchLanguage} to="/country/it">IT</LanguageLinks>
            <LanguageLinks onClick={this.handleSwitchLanguage} to="/country/jp">JP</LanguageLinks>
            <LanguageLinks onClick={this.handleSwitchLanguage} to="/country/kr">KR</LanguageLinks>
            <LanguageLinks onClick={this.handleSwitchLanguage} to="/country/se">SE</LanguageLinks>
          </LanguageLinksContainer>
          <Title>
            <TitleMain>_news.Index</TitleMain>
            <TitleSub>the latest & most important news in one place.</TitleSub>
          </Title>
        </Header>
      </GridHeaderContainer>
    );
  }
};

export default Navbar;