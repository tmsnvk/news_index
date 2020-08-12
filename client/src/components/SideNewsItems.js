import React from "react";
import styled from "styled-components";
import { color, font, fontsize, mediaq } from "../variables/styling";

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
  color: ${color.font.secondary};
  font-weight: bold;
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
  border-left: 5px solid ${color.font.main};
`;

const SideNewsItems = ({ sideNewsdata }) => {
  const renderSideNewsItems = sideNewsdata.map(({ description, publishedAt, source, title, url }) => {
    return (
      <ItemSideIndividualContainer key={title}>
        <ItemPublished>
          <ItemPublishedAt>{new Date(publishedAt).toLocaleString()}</ItemPublishedAt>
          <ItemPublishedBy>{source?.name}</ItemPublishedBy>
        </ItemPublished>
        <ItemTitleContainer><ItemTitleLink href={url}>{title.split("-")[0]}</ItemTitleLink></ItemTitleContainer>
        <ItemBody>{description}</ItemBody>
      </ItemSideIndividualContainer>
    );
  });

  return (
    <GridContentSideContainer>
      <ItemSideContainer>
        {renderSideNewsItems}
      </ItemSideContainer>
    </GridContentSideContainer>
  );
};

export default SideNewsItems;