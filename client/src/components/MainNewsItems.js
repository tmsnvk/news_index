import React from "react";
import styled from "styled-components";

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
  color: var(--body-color-tertiary);
`;

const ItemTitleContainer = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  padding: 0 0 0 2rem;
  border-left: 5px solid var(--font-color-primary);
`;

const ItemTitleLink = styled.a`
  text-decoration: none;
  color: var(--body-color-tertiary);
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
  border-left: 5px solid var(--font-color-primary);

  @media only screen and (max-width: 992px) {
    font-size: 1.2rem;
  }
`;

const MainNewsItems = (props) => {
  const renderMainNewsItems = props.data.slice(0, 3).map((item) => {

    return (
      <ItemMainIndividualContainer key={item.title}>
        <ItemImageContainer><ItemImage src={item.urlToImage} alt={item.title} /></ItemImageContainer>
        <ItemPublished>
          <ItemPublishedAt>{new Date(item.publishedAt).toLocaleString()}</ItemPublishedAt>
          <ItemPublishedBy>{item.source.name}</ItemPublishedBy>
        </ItemPublished>
        <ItemTitleContainer><ItemTitleLink href={item.url}>{item.title.split("-")[0]}</ItemTitleLink></ItemTitleContainer>
        <ItemBody>{item.description}</ItemBody>
      </ItemMainIndividualContainer>
    );
  });

  return (
    <GridContentMainContainer>
      <ItemMainContainer>{renderMainNewsItems}</ItemMainContainer>
    </GridContentMainContainer>
  );
}

export default MainNewsItems;