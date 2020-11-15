import React, { FunctionComponent } from "react";
import { ItemBody, ItemContainer, ItemPublishedContainer, ItemTitleLink } from "components/components-shared";
import styled from "styled-components";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 5;
  width: 90%;
  margin: 0 auto;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
  }
`;

type ComponentType = {
  sideNewsdata: {
    description: string;
    publishedAt: string;
    source?: {
      name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
  }[]
}

const SideNewsItems: FunctionComponent<ComponentType> = ({ sideNewsdata }) => {
  const renderSideNewsItems = sideNewsdata.map(({ description, publishedAt, source, title, url }) => {
    return (
      <ItemContainer key={title}>
        <ItemPublishedContainer publishedAt={publishedAt} source={source} />
        <ItemTitleLink title={title} url={url} />
        <ItemBody description={description} />
      </ItemContainer>
    );
  });

  return (
    <ComponentContainer>
      {renderSideNewsItems}
    </ComponentContainer>
  );
};

export default SideNewsItems;