import React from "react";
import styled from "styled-components";

const GridContentSideContainer = styled.section`
  grid-area: grid-content-side;
  width: 75%;
  margin: 0 auto;

  @media only screen and (max-width: 1200px) {
    width: 80%;
    margin: 0 auto;
  }

  @media only screen and (max-width: 992px) {
    width: 90%;
    margin: 0 auto;
  }
`;

const ItemSideContainer = styled.div`

`;

const ItemSideIndividualContainer = styled.div`
  margin: 0 0 5rem 0;
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
  font-weight: bold;
`;

const ItemPublishedBy = styled.div`
  color: var(--font-color-three);
  font-weight: bold;
`;

const ItemTitleContainer = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  padding: 0 0 0 2rem;
  border-left: 5px solid var(--font-color-one);
`;

const ItemTitleLink = styled.a`
  text-decoration: none;
  color: var(--font-color-three);
  font-size: 1.8rem;

  &:hover {
    color: inherit;
    text-decoration: underline;
  }

  @media only screen and (max-width: 992px) {
    font-size: 1.2rem;
  }
`;

const ItemBody = styled.div`
  font-size: 1.2rem;
  padding: 1rem 0 2rem 2rem;
  border-left: 5px solid var(--font-color-one);
`;

const SideNewsItems = (props) => {
  const renderSideNewsItems = props.data.slice(4, 14).map((item) => {
    return (
      <ItemSideIndividualContainer key={item.title}>
        <ItemPublished>
          <ItemPublishedAt>{new Date(item.publishedAt).toLocaleString()}</ItemPublishedAt>
          <ItemPublishedBy>{item.source.name}</ItemPublishedBy>
        </ItemPublished>
        <ItemTitleContainer><ItemTitleLink href={item.url}>{item.title.split("-")[0]}</ItemTitleLink></ItemTitleContainer>
        <ItemBody>{item.description}</ItemBody>
      </ItemSideIndividualContainer>
    );
  });

  return (
    <GridContentSideContainer>
      <ItemSideContainer>{renderSideNewsItems}</ItemSideContainer>
    </GridContentSideContainer>
  );
}

export default SideNewsItems;