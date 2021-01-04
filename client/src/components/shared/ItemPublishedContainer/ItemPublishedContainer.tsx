import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 0 1rem 0;
  font-size: ${({ theme }) => theme.fontSize.default};
  font-weight: 600;
`;

const ItemPublishedAt = styled.p`
  padding: 0 1rem 0 0;
`;

const ItemPublishedBy = styled.p`
  color: ${({ theme }) => theme.color.greenDark};
`;

type TComponent = {
  publishedAt: string;
  source?: {
    name: string;
  };
}

const ItemPublishedContainer = ({ publishedAt, source }: TComponent) => {
  return (
    <ComponentContainer>
      <ItemPublishedAt>{new Date(publishedAt).toLocaleString()}</ItemPublishedAt>
      <ItemPublishedBy>{source?.name}</ItemPublishedBy>
    </ComponentContainer>
  );
};

export default ItemPublishedContainer;