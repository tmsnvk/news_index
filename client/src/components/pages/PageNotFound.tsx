import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { Message } from "components/shared/general";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
  }
`;

const NavigationLink = styled(Link)`
  color: ${({ theme }) => theme.color.greenDark};
  font-weight: 600;

  &:hover {
    color: inherit;
    text-decoration: underline;
  }
`;

const PageNotFound = () => {
  return (
    <ComponentContainer>
      <Helmet>
        <title>404 - Page not found</title>
      </Helmet>
      <Message message={<>This page does not exist. Click <NavigationLink to="/">here</NavigationLink> to get back to the main page.</>} />
    </ComponentContainer>
  );
};

export default PageNotFound;