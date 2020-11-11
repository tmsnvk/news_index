import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 5;
  grid-row-end: 6;
  color: ${({ theme }) => theme.color.primaryLight};
  background-color: ${({ theme }) => theme.color.primaryDark};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
     
  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    flex-direction: row;
  }
`;

const ColumnCopyrightContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize.default};
  color: ${({ theme }) => theme.color.secondary};
  font-weight: bold;
  padding: 0 0 1.5rem 0;
  letter-spacing: 0.2rem;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    padding: 0 1rem 1rem 1rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    padding: 0 2.5rem 1rem 2.5rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    padding: 0 3.5rem 1rem 3.5rem;
  }
`;

const ColumnCopyrightRows = styled.p`
  padding: 1rem 0 0 0;
`;

const ColumnLinksContainer = styled(ColumnCopyrightContainer)`
  color: ${({ theme }) => theme.color.primaryLight};
`;

const ColumnLinks = styled(Link)`
  color: inherit;
  text-decoration: none;
  padding: 1rem 0 0 0;

  &:hover {
    color: ${({ theme }) => theme.color.secondary};
  }
`;

const ColumnLinkSpan = styled.span`
  color: ${({ theme }) => theme.color.alternate};
`;

const Footer: React.FunctionComponent = () => {
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