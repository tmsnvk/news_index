import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: ${({ theme }) => theme.fontSize.default};
  font-weight: bold;
  padding: 1rem 0 1rem 0;
`;

const ItemPublishedAt = styled.div`
  padding: 0 1rem 0 0;
`;

const ItemPublishedBy = styled.div`
  color: ${({ theme }) => theme.color.secondary};
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