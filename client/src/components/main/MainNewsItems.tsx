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
    description: string;
    publishedAt: string;
    source?: {
      name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
  }[];
};

// @description; renders <MainNewsItems /> element.
// @{mainNewsData}; the first three elements of the query retrieved from the server.
const MainNewsItems = ({ mainNewsData }: TComponent) => {
  // @description; error handling @function used by renderMainNewsItems; for cases when the url is retrieved but there's an error of some sort.
  const handleOnError = (event: ChangeEvent<HTMLImageElement>): string => (event.target.src = notfound);

  // @description; renders @{mainNewsData}
  const renderMainNewsItems = mainNewsData.map(({ description, publishedAt, source, title, url, urlToImage }) => {
    return (
      <ItemContainer key={title}>
        {urlToImage !== null ? (<ItemImage src={urlToImage} alt={title} onError={handleOnError} loading={"lazy"} />) : (<ItemImage src={notfound} alt={"image not found"} loading={"lazy"} />)}
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