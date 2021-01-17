import React from "react";
import styled from "styled-components";
import { Message } from "../../general";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 4;
  grid-row-end: 5;
  margin: 2.5rem 0 2.5rem 0;
  min-height: 100vh;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
  }
`;

const ErrorMessage = () => {
  return (
    <ComponentContainer>
      <Message message={"The server is currently unavailable."} />
      <Message message={"Please try again later!"} />
    </ComponentContainer>
  );
};

export default ErrorMessage;