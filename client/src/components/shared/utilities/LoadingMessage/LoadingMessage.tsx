import React from "react";
import styled from "styled-components";
import { Message } from "../../general";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 4;
  grid-row-end: 5;
  margin: 5rem 0 10rem 0;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
  }
`;

const LoadingMessage = () => {
  return (
    <ComponentContainer>
      <Message message={"Loading the requested news category..."} />
    </ComponentContainer>
  );
};

export default LoadingMessage;