import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.p`
  padding: 1rem 0 0 2rem;
  font-size: ${({ theme }) => theme.fontSize.small};
  border-left: 5px solid ${({ theme }) => theme.color.grayDark};

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

type TComponent = {
  description: string
}

const ItemBody = ({ description }: TComponent) => {
  return (
    <ComponentContainer>
      {description}
    </ComponentContainer>
  ); 
};

export default ItemBody;