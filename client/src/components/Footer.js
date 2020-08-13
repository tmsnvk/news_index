import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { color, font, fontsize, mediaq } from "../variables/styling";

const GridFooterContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 5;
  grid-row-end: 6;
  color: ${color.font.mainLight};
  background-color: ${color.background.main};
  text-align: center;

  @media only screen and (min-width: 320px) {
   
  }
  
  @media only screen and (min-width: 480px) {
     
  }
     
  @media only screen and (min-width: 768px) {
  
  }
  
  @media only screen and (min-width:992px) {
  
  }
     
  @media only screen and (min-width: 1200px) {
  
  }
`;

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem 0 2rem 0;

  @media only screen and (min-width: 320px) {
   
  }
  
  @media only screen and (min-width: 480px) {
     
  }
     
  @media only screen and (min-width: 768px) {
  
  }
  
  @media only screen and (min-width:992px) {
  
  }
     
  @media only screen and (min-width: 1200px) {
  
  }
`;

const ColumnZero = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColumnZeroRows = styled.p`
  font-family: ${font.secondary};
  font-size: 1rem;
  font-weight: bold;
  color: ${color.font.secondary};
  text-decoration: none;
  letter-spacing: 0.2rem;
  padding: 1rem 0 0 0;
`;

const ColumnOne = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColumnOneSpan = styled.span`
  font-size: 1rem;
  font-family: inherit;
  letter-spacing: 0.2rem;
  color: ${color.font.alternate};
`;

const ColumnTwo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColumnThree = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColumnFour = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColumnLinks = styled(Link)`
  color: inherit;
  font-size: 1rem;
  font-family: ${font.secondary};
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 0.2rem;
  padding: 1rem 0 0 0;

  &:hover {
    color: ${color.font.secondary};
  }
`;

const Footer = () => {
  return (
    <GridFooterContainer>
      <FooterContainer>
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
      </FooterContainer>
    </GridFooterContainer>
  );
};

export default Footer;