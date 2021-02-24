import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { ItemBody, ItemContainer, ItemImage, ItemPublishedContainer, ItemTitleLink } from "components/shared/newsitem";
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
    description: string
    publishedAt: string
    source?: {
      name: string
    }
    title: string
    url: string
    urlToImage: string
  }[]
}

// {mainNewsData}; the first three elements of the response retrieved from the server.
const MainNewsItems = ({ mainNewsData }: TComponent) => {
  const renderMainNewsItems = mainNewsData.map(({ description, publishedAt, source, title, url, urlToImage }) => {

    // error handling for {renderMainNewsItems}; for cases when urlToImage is retrieved but there's an error of some sort.
    const handleOnError = (event: ChangeEvent<HTMLImageElement>) => {
      event.target.src = notfound;
      event.target.alt = "image not found"
    };

    return (
      <ItemContainer key={title}>
        {urlToImage !== null ? (<ItemImage src={urlToImage} onError={handleOnError} alt={title} loading={"lazy"} />) : (<ItemImage src={notfound} alt={"image not found"} loading={"lazy"} />)}
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