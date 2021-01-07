import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 4;
  grid-row-end: 5;
  margin: 2.5rem 0 2.5rem 0;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
  }
`;

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: 600;
  letter-spacing: 0.1rem;
  text-align: center;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.large};
  }
`;

const Error = () => {
  return (
    <ComponentContainer>
      <Paragraph>
        The server is currently unavailable.
      </Paragraph>
      <Paragraph>
        Please try again later!
      </Paragraph>
    </ComponentContainer>
  );
};

export default Error;