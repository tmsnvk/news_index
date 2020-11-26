import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.div`
  font-size: ${({ theme }) => theme.fontSize.default};
  padding: 1rem 0 0 2rem;
  border-left: 5px solid ${({ theme }) => theme.color.primaryDark};

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.small};
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

type TComponent = {
  description: string;
}

const ItemBody = ({ description }: TComponent) => {
  return (
    <ComponentContainer>
      {description}
    </ComponentContainer>
  );
};

export default ItemBody;