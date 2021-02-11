import React, { ReactElement } from "react";
import styled from "styled-components";

const ComponentContainer = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: 600;
  letter-spacing: 0.1rem;
  text-align: center;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.large};
  }
`;

type TComponent = {
  render: string | ReactElement;
};

const Message = ({ render }: TComponent) => {
  return (
    <ComponentContainer>
      {render}
    </ComponentContainer>
  );
};

export default Message;