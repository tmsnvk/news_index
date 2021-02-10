import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { Message } from "components/shared/general";
import notFoundData from "utilities/data/messages/notFound";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  margin: 15rem 0 0 0;
  min-height: 100vh;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
  }
`;

// @description - renders <PageNotFound /> element.
const PageNotFound = () => {
  return (
    <ComponentContainer>
      <Helmet>
        <title>404 - Page not found</title>
      </Helmet>
      <Message render={notFoundData.message.pOne} />
      <Message render={notFoundData.message.pTwo} />
    </ComponentContainer>
  );
};

export default PageNotFound;