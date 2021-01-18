import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import footerLinks from "utilities/data/texts/footerLinks";

const ComponentContainer = styled.footer`
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
        <CopyrightRow>{footerLinks.copyrightColumn.rowOne}</CopyrightRow>
        <CopyrightRow>{footerLinks.copyrightColumn.rowTwo}</CopyrightRow>
        <CopyrightRow>{footerLinks.copyrightColumn.rowThree}</CopyrightRow>
      </CopyrightColumnContainer>
      <LinkColumnContainer>
        <LinkColumn to="/newsindex">{footerLinks.linkColumn.columnOne.rowOne}</LinkColumn>
        <LinkColumn to="/newsindex">{footerLinks.linkColumn.columnOne.rowTwo}</LinkColumn>
        <LinkColumn to="/newsindex">{footerLinks.linkColumn.columnOne.rowThree}</LinkColumn>
      </LinkColumnContainer>
      <LinkColumnContainer>
        <LinkColumn to="/newsindex">{footerLinks.linkColumn.columnTwo.rowOne}</LinkColumn>
        <LinkColumn to="/newsindex">{footerLinks.linkColumn.columnTwo.rowTwo}</LinkColumn>
        <LinkColumn to="/newsindex">{footerLinks.linkColumn.columnTwo.rowThree}</LinkColumn>
        <LinkColumn to="/newsindex">{footerLinks.linkColumn.columnTwo.rowFour}</LinkColumn>
        <LinkColumn to="/newsindex">{footerLinks.linkColumn.columnTwo.rowFive}</LinkColumn>
      </LinkColumnContainer>
      <LinkColumnContainer>
        <LinkColumn to="/newsindex">{footerLinks.linkColumn.columnThree.rowOne}</LinkColumn>
        <LinkColumn to="/newsindex">{footerLinks.linkColumn.columnThree.rowTwo}</LinkColumn>
        <LinkColumn to="/newsindex">{footerLinks.linkColumn.columnThree.rowThree}</LinkColumn>
      </LinkColumnContainer>
      <LinkColumnContainer>
        <LinkColumn to="/newsindex">{footerLinks.linkColumn.columnFour.rowOne}</LinkColumn>
        <LinkColumn to="/newsindex">{footerLinks.linkColumn.columnFour.rowTwo}</LinkColumn>
        <LinkColumn to="/newsindex"><LinkColumnSpan>{footerLinks.linkColumn.columnFour.rowThree}</LinkColumnSpan></LinkColumn>
      </LinkColumnContainer>
    </ComponentContainer>
  );
};

export default Footer;