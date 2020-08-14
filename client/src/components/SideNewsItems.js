import React from "react";
import styled from "styled-components";
import { color, fontsize, mediaq } from "../variables/styling";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 5;
  width: 80%;
  margin: 0 auto;

  @media only screen and (min-width: ${mediaq.medium}) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
  }
  
  @media only screen and (min-width: ${mediaq.large}) {
    width: 90%;
  }
`;

const IndividualItemContainer = styled.div`
  margin: 0 0 2rem 0;
`;

const ItemPublishedContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: ${fontsize.default};
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
  text-transform: uppercase;
  padding: 0 0 0 2rem;
  border-left: 5px solid ${color.font.main};
  font-weight: bold;
`;

const ItemTitleLink = styled.a`
  text-decoration: none;
  color: ${color.font.secondary};
  font-size: ${fontsize.default};

  &:hover {
    color: inherit;
    text-decoration: underline;
  }

  @media only screen and (min-width: ${mediaq.small}) {
    font-size: ${fontsize.small};
  }

  @media only screen and (min-width: ${mediaq.medium}) {
    font-size: ${fontsize.medium};
  }

  @media only screen and (min-width: ${mediaq.extraLarge}) {
    font-size: ${fontsize.large};
  }
`;

const ItemBody = styled.div`
  font-size: ${fontsize.default};
  padding: 1rem 0 0 2rem;
  border-left: 5px solid ${color.font.main};

  @media only screen and (min-width: ${mediaq.medium}) {
    font-size: ${fontsize.small};
  }

  @media only screen and (min-width: ${mediaq.extraLarge}) {
    font-size: ${fontsize.medium};
  }
`;

const SideNewsItems = ({ sideNewsdata }) => {
  const renderSideNewsItems = sideNewsdata.map(({ description, publishedAt, source, title, url }) => {
    return (
      <IndividualItemContainer key={title}>
        <ItemPublishedContainer>
          <ItemPublishedAt>{new Date(publishedAt).toLocaleString()}</ItemPublishedAt>
          <ItemPublishedBy>{source?.name}</ItemPublishedBy>
        </ItemPublishedContainer>
        <ItemTitleContainer><ItemTitleLink href={url}>{title.split("-")[0]}</ItemTitleLink></ItemTitleContainer>
        <ItemBody>{description}</ItemBody>
      </IndividualItemContainer>
    );
  });

  return (
    <ComponentContainer>
      {renderSideNewsItems}
    </ComponentContainer>
  );
};

export default SideNewsItems;