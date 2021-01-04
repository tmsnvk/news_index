import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { ItemBody, ItemContainer, ItemImage, ItemPublishedContainer, ItemTitleLink } from "components/shared";
import notfound from "assets/images/notfound.png";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  width: 90%;
  margin: 0 auto;
`;

type TComponent = {
  mainNewsData: {
    description: string;
    publishedAt: string;
    source?: {
      name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
  }[];
}

const MainNewsItems = ({ mainNewsData }: TComponent) => {
  const handleOnError = (event: ChangeEvent<HTMLImageElement>) => event.target.src = notfound;

  const renderMainNewsItems = mainNewsData.map(({ description, publishedAt, source, title, url, urlToImage }) => {
    return (
      <ItemContainer key={title}>
        {urlToImage !== null ? <ItemImage src={urlToImage} alt={title} onError={handleOnError} /> : <ItemImage src={notfound} alt={"image not found"} />}
        <ItemPublishedContainer publishedAt={publishedAt} source={source} />
        <ItemTitleLink title={title} url={url} />
        <ItemBody description={description} />
      </ItemContainer>
    );
  });

  return (
    <ComponentContainer>
      {renderMainNewsItems}
    </ComponentContainer>
  );
};

export default MainNewsItems;