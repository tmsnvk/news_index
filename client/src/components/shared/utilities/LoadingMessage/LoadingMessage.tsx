import React from "react";
import styled from "styled-components";
import { Message } from "components/shared/general";
import loadingData from "utilities/data/messages/loading";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 4;
  grid-row-end: 5;
  margin: 5rem 0 0 0;
  min-height: 100vh;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
  }
`;

const LoadingMessage = () => {
  return (
    <ComponentContainer>
      <Message render={loadingData.message} />
    </ComponentContainer>
  );
};

export default LoadingMessage;