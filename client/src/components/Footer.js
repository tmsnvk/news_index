import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";

const GridFooterContainer = styled.section`
  grid-area: grid-footer;
  color: var(--font-color-secondary);
  background-color: var(--body-color-secondary);
  text-align: center;
`;

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 2rem 0 2rem 0;
`;

const ColumnZero = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColumnZeroRows = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--body-color-tertiary);
  text-decoration: none;
  letter-spacing: 0.2rem;
  padding: 1rem 0 0 0;

  &:hover {
    color: var(--font-color-secondary);
  }

  @media only screen and (max-width: 992px) {
    font-size: 1rem;
  }
`;

const ColumnOne = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 10rem;

  @media only screen and (max-width: 992px) {
    margin: 0 0 0 5rem;
  }
`;

const ColumnOneSpan = styled.span`
  font-size: 1.2rem;
  font-family: inherit;
  letter-spacing: 0.2rem;
  color: var(--font-color-tertiary);

  @media only screen and (max-width: 992px) {
    letter-spacing: 0;
    font-size: 1rem;
  }
`;

const ColumnTwo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 5rem 0 5rem;

  @media only screen and (max-width: 992px) {
    margin: 0 3rem 0 3rem;
  }
`;

const ColumnThree = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 5rem 0 0;

  @media only screen and (max-width: 992px) {
    margin: 0 3rem 0 0;
  }
`;

const ColumnFour = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColumnLinks = styled(Link)`
  color: inherit;
  font-size: 1.2rem;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 0.2rem;
  padding: 1rem 0 0 0;

  &:hover {
    color: var(--body-color-tertiary);
  }

  @media only screen and (max-width: 992px) {
    font-size: 1rem;
    letter-spacing: 0;
  }
`;

const Footer = () => {
  return (
    <GridFooterContainer>
      <FooterContainer>
        <Router>
          <ColumnZero>
            <ColumnZeroRows>&copy; 2020 tamasnvk</ColumnZeroRows>
            <ColumnZeroRows>built with &#x2764;</ColumnZeroRows>
            <ColumnZeroRows>using react & newsapi.org</ColumnZeroRows>
          </ColumnZero>
          <ColumnOne>
            <ColumnLinks to="/">Contact us</ColumnLinks>
            <ColumnLinks to="/">Newsletter</ColumnLinks>
            <ColumnLinks to="/"><ColumnOneSpan>Subscription</ColumnOneSpan></ColumnLinks>
          </ColumnOne>
          <ColumnTwo>
            <ColumnLinks to="/">Complaints & corrections</ColumnLinks>
            <ColumnLinks to="/">Privacy</ColumnLinks>
            <ColumnLinks to="/">Terms & conditions</ColumnLinks>
            <ColumnLinks to="/">Help</ColumnLinks>
            <ColumnLinks to="/">Sitemap</ColumnLinks>
          </ColumnTwo>
          <ColumnThree>
            <ColumnLinks to="/">Work for us</ColumnLinks>
            <ColumnLinks to="/">Advertise with us</ColumnLinks>
            <ColumnLinks to="/">Partner with us</ColumnLinks>
          </ColumnThree>
          <ColumnFour>
            <ColumnLinks to="/">Facebook</ColumnLinks>
            <ColumnLinks to="/">Twitter</ColumnLinks>
            <ColumnLinks to="/">YouTube</ColumnLinks>
          </ColumnFour>
        </Router>
      </FooterContainer>
    </GridFooterContainer>
  );
};

export default Footer;