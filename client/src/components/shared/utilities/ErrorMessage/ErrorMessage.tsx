import React from "react";
import styled from "styled-components";
import { Message } from "components/shared/general";
import errorData from "utilities/data/messages/error";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 4;
  grid-row-end: 5;
  min-height: 100vh;
  margin: 15rem 0 0 0;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
  }
`;

// @description - renders <ErrorMessage /> element.
const ErrorMessage = () => {
  return (
    <ComponentContainer>
      <Message render={errorData.error.pOne} />
      <Message render={errorData.error.pTwo} />
    </ComponentContainer>
  );
};

export default ErrorMessage;