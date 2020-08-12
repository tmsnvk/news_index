import React from "react";
import styled from "styled-components";
import { color, font, fontsize, mediaq } from "../variables/styling";

const GridContentMainContainer = styled.section`
  grid-area: grid-content-main;
  width: 90%;
  margin: 0 auto;
`;

const ItemMainContainer = styled.div`

`;

const ItemMainIndividualContainer = styled.div`
  margin: 0 0 5rem 0;
`;

const ItemImageContainer = styled.div`

`;

const ItemImage = styled.img`
  width: 100%;
  padding: 3rem 0 1rem 0;

  @media only screen and (max-width: 768px) {
    width: 80%;
  }
`;

const ItemPublished = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem 0 1rem 0;
`;

const ItemPublishedAt = styled.div`
  padding: 0 1rem 0 0;
`;

const ItemPublishedBy = styled.div`
  color: ${color.font.secondary};
`;

const ItemTitleContainer = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  padding: 0 0 0 2rem;
  border-left: 5px solid ${color.font.main};
`;

const ItemTitleLink = styled.a`
  text-decoration: none;
  color: ${color.font.secondary};
  font-size: 2rem;

  &:hover {
    color: inherit;
    text-decoration: underline;
  }

  @media only screen and (max-width: 992px) {
    font-size: 1.5rem;
  }
`;

const ItemBody = styled.div`
  font-size: 1.5rem;
  padding: 1rem 0 1rem 2rem;
  border-left: 5px solid ${color.font.main};

  @media only screen and (max-width: 992px) {
    font-size: 1.2rem;
  }
`;

const MainNewsItems = ({ mainNewsData }) => {
  const renderMainNewsItems = mainNewsData.map(({ description, publishedAt, source, title, url, urlToImage }) => {
    return (
      <ItemMainIndividualContainer key={title}>
        <ItemImageContainer><ItemImage src={urlToImage} alt={title} /></ItemImageContainer>
        <ItemPublished>
          <ItemPublishedAt>{new Date(publishedAt).toLocaleString()}</ItemPublishedAt>
          <ItemPublishedBy>{source?.name}</ItemPublishedBy>
        </ItemPublished>
        <ItemTitleContainer><ItemTitleLink href={url}>{title.split("-")[0]}</ItemTitleLink></ItemTitleContainer>
        <ItemBody>{description}</ItemBody>
      </ItemMainIndividualContainer>
    );
  });

  return (
    <GridContentMainContainer>
      <ItemMainContainer>
        {renderMainNewsItems}
      </ItemMainContainer>
    </GridContentMainContainer>
  );
};

export default MainNewsItems;