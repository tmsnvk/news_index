import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from 'styled-components';

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
            <Router>
              <LanguageLinks onClick={this.handleSwitchLanguage} to="/bg">BG</LanguageLinks>
              <LanguageLinks onClick={this.handleSwitchLanguage} to="/fr">FR</LanguageLinks>
              <LanguageLinks onClick={this.handleSwitchLanguage} to="/gb">GB</LanguageLinks>
              <LanguageLinks onClick={this.handleSwitchLanguage} to="/hu">HU</LanguageLinks>
              <LanguageLinks onClick={this.handleSwitchLanguage} to="/it">IT</LanguageLinks>
              <LanguageLinks onClick={this.handleSwitchLanguage} to="/kr">KR</LanguageLinks>
              <LanguageLinks onClick={this.handleSwitchLanguage} to="/jp">JP</LanguageLinks>
              <LanguageLinks onClick={this.handleSwitchLanguage} to="/se">SE</LanguageLinks>
            </Router>
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