import React, { ReactElement } from "react";
import styled from "styled-components";

const ComponentContainer = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: 600;
  letter-spacing: 0.1rem;
  text-align: center;
  margin: 10rem 0 5rem 0;
  min-height: 100vh;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.large};
  }
`;

type TComponent = {
  message: string | ReactElement;
}

const Message = ({ message }: TComponent) => {
  return (
    <ComponentContainer>
      {message}
    </ComponentContainer>
  );
};

export default Message;