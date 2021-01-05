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

const LinkColumn = styled(Link)`
  color: inherit;
  padding: 1rem 0 0 0;

  &:hover {
    color: ${({ theme }) => theme.color.greenDark};
  }
`;

const LinkColumnSpan = styled.span`
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
        <LinkColumn to="/">Facebook</LinkColumn>
        <LinkColumn to="/">Twitter</LinkColumn>
        <LinkColumn to="/">YouTube</LinkColumn>
      </LinkColumnContainer>
      <LinkColumnContainer>
        <LinkColumn to="/">Complaints & corrections</LinkColumn>
        <LinkColumn to="/">Privacy</LinkColumn>
        <LinkColumn to="/">Terms & conditions</LinkColumn>
        <LinkColumn to="/">Help</LinkColumn>
        <LinkColumn to="/">Sitemap</LinkColumn>
      </LinkColumnContainer>
      <LinkColumnContainer>
        <LinkColumn to="/">Work with us</LinkColumn>
        <LinkColumn to="/">Advertise with us</LinkColumn>
        <LinkColumn to="/">Partner with us</LinkColumn>
      </LinkColumnContainer>
      <LinkColumnContainer>
        <LinkColumn to="/">Contact us</LinkColumn>
        <LinkColumn to="/">Newsletter</LinkColumn>
        <LinkColumn to="/"><LinkColumnSpan>Subscription</LinkColumnSpan></LinkColumn>
      </LinkColumnContainer>
    </ComponentContainer>
  );
};

export default Footer;