import React, { FunctionComponent } from "react";
import { ItemBody, ItemContainer, ItemPublishedContainer, ItemTitleLink } from "components/commoncomponents";
import styled from "styled-components";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 5;
  width: 80%;
  margin: 0 auto;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
  }
  
  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    width: 90%;
  }
`;

type Props = {
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

const SideNewsItems: FunctionComponent<Props> = ({ sideNewsdata }) => {
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