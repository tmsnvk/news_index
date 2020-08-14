import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { color, font, fontsize, mediaq } from "../variables/styling";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 5;
  grid-row-end: 6;
  color: ${color.font.mainLight};
  background-color: ${color.background.main};
  text-align: center;
  margin: 2rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
     
  @media only screen and (min-width: ${mediaq.medium}) {
    flex-direction: row;
  }
`;

const ColumnCopyrightContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${font.secondary};
  font-size: ${fontsize.default};
  color: ${color.font.secondary};
  font-weight: bold;
  padding: 0 0 1.5rem 0;
  letter-spacing: 0.2rem;

  @media only screen and (min-width: ${mediaq.medium}) {
    padding: 0 1rem 1rem 1rem;
  }

  @media only screen and (min-width: ${mediaq.large}) {
    padding: 0 2.5rem 1rem 2.5rem;
  }

  @media only screen and (min-width: ${mediaq.extraLarge}) {
    padding: 0 3.5rem 1rem 3.5rem;
  }
`;

const ColumnCopyrightRows = styled.p`
  padding: 1rem 0 0 0;
`;

const ColumnLinksContainer = styled(ColumnCopyrightContainer)`
  color: ${color.font.mainLight};
`;

const ColumnLinks = styled(Link)`
  color: inherit;
  text-decoration: none;
  padding: 1rem 0 0 0;

  &:hover {
    color: ${color.font.secondary};
  }
`;

const ColumnLinkSpan = styled.span`
  font-family: inherit;
  color: ${color.font.alternate};
`;

const Footer = () => {
  return (
    <ComponentContainer>
      <ColumnCopyrightContainer>
        <ColumnCopyrightRows>&copy; 2020 tamasnvk</ColumnCopyrightRows>
        <ColumnCopyrightRows>built with &#x2764;</ColumnCopyrightRows>
        <ColumnCopyrightRows>using react & newsapi.org</ColumnCopyrightRows>
      </ColumnCopyrightContainer>
      <ColumnLinksContainer>
        <ColumnLinks to="/">Facebook</ColumnLinks>
        <ColumnLinks to="/">Twitter</ColumnLinks>
        <ColumnLinks to="/">YouTube</ColumnLinks>
      </ColumnLinksContainer>
      <ColumnLinksContainer>
        <ColumnLinks to="/">Complaints & corrections</ColumnLinks>
        <ColumnLinks to="/">Privacy</ColumnLinks>
        <ColumnLinks to="/">Terms & conditions</ColumnLinks>
        <ColumnLinks to="/">Help</ColumnLinks>
        <ColumnLinks to="/">Sitemap</ColumnLinks>
      </ColumnLinksContainer>
      <ColumnLinksContainer>
        <ColumnLinks to="/">Work with us</ColumnLinks>
        <ColumnLinks to="/">Advertise with us</ColumnLinks>
        <ColumnLinks to="/">Partner with us</ColumnLinks>
      </ColumnLinksContainer>
      <ColumnLinksContainer>
        <ColumnLinks to="/">Contact us</ColumnLinks>
        <ColumnLinks to="/">Newsletter</ColumnLinks>
        <ColumnLinks to="/"><ColumnLinkSpan>Subscription</ColumnLinkSpan></ColumnLinks>
      </ColumnLinksContainer>
    </ComponentContainer>
  );
};

export default Footer;