import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 5;
  grid-row-end: 6;
  color: ${props => props.theme.fontColor.mainLight};
  background-color: ${props => props.theme.backgroundColor.mainDark};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
     
  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    flex-direction: row;
  }
`;

const ColumnCopyrightContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${props => props.theme.fontFamily.secondary};
  font-size: ${props => props.theme.fontSize.default};
  color: ${props => props.theme.fontColor.secondary};
  font-weight: bold;
  padding: 0 0 1.5rem 0;
  letter-spacing: 0.2rem;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    padding: 0 1rem 1rem 1rem;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    padding: 0 2.5rem 1rem 2.5rem;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.extraLarge}) {
    padding: 0 3.5rem 1rem 3.5rem;
  }
`;

const ColumnCopyrightRows = styled.p`
  padding: 1rem 0 0 0;
`;

const ColumnLinksContainer = styled(ColumnCopyrightContainer)`
  color: ${props => props.theme.fontColor.mainLight};
`;

const ColumnLinks = styled(Link)`
  color: inherit;
  text-decoration: none;
  padding: 1rem 0 0 0;

  &:hover {
    color: ${props => props.theme.fontColor.secondary};
  }
`;

const ColumnLinkSpan = styled.span`
  font-family: inherit;
  color: ${props => props.theme.fontColor.alternate};
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