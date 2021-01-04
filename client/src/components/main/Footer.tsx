import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 5;
  grid-row-end: 6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.grayDark};
  color: ${({ theme }) => theme.color.grayLight};
  text-align: center;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    flex-direction: row;
  }
`;

const CopyrightColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 1.5rem 0;
  font-size: ${({ theme }) => theme.fontSize.default};
  color: ${({ theme }) => theme.color.greenDark};
  font-weight: 600;
  letter-spacing: 0.2rem;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    padding: 0 1rem 1rem 1rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    padding: 0 3.5rem 1rem 3.5rem;
  }
`;

const CopyrightRow = styled.p`
  padding: 1rem 0 0 0;
`;

const LinkColumnContainer = styled(CopyrightColumnContainer)`
  color: ${({ theme }) => theme.color.grayLight};
`;

const ColumnLink = styled(Link)`
  color: inherit;
  padding: 1rem 0 0 0;

  &:hover {
    color: ${({ theme }) => theme.color.greenDark};
  }
`;

const ColumnLinkSpan = styled.span`
  color: ${({ theme }) => theme.color.orangeDark};
`;

const Footer = () => {
  return (
    <ComponentContainer>
      <CopyrightColumnContainer>
        <CopyrightRow>&copy; 2020 - 2021 tamasnvk</CopyrightRow>
        <CopyrightRow>built with &#x2764;</CopyrightRow>
        <CopyrightRow>using react & newsapi.org</CopyrightRow>
      </CopyrightColumnContainer>
      <LinkColumnContainer>
        <ColumnLink to="/">Facebook</ColumnLink>
        <ColumnLink to="/">Twitter</ColumnLink>
        <ColumnLink to="/">YouTube</ColumnLink>
      </LinkColumnContainer>
      <LinkColumnContainer>
        <ColumnLink to="/">Complaints & corrections</ColumnLink>
        <ColumnLink to="/">Privacy</ColumnLink>
        <ColumnLink to="/">Terms & conditions</ColumnLink>
        <ColumnLink to="/">Help</ColumnLink>
        <ColumnLink to="/">Sitemap</ColumnLink>
      </LinkColumnContainer>
      <LinkColumnContainer>
        <ColumnLink to="/">Work with us</ColumnLink>
        <ColumnLink to="/">Advertise with us</ColumnLink>
        <ColumnLink to="/">Partner with us</ColumnLink>
      </LinkColumnContainer>
      <LinkColumnContainer>
        <ColumnLink to="/">Contact us</ColumnLink>
        <ColumnLink to="/">Newsletter</ColumnLink>
        <ColumnLink to="/"><ColumnLinkSpan>Subscription</ColumnLinkSpan></ColumnLink>
      </LinkColumnContainer>
    </ComponentContainer>
  );
};

export default Footer;