import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 5;
  width: 80%;
  margin: 0 auto;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
  }
  
  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    width: 90%;
  }
`;

const ItemContainer = styled.div`
  margin: 0 0 2rem 0;
`;

const ItemPublishedContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: ${props => props.theme.fontSize.default};
  font-weight: bold;
  padding: 1rem 0 1rem 0;
`;

const ItemPublishedAt = styled.div`
  padding: 0 1rem 0 0;
`;

const ItemPublishedBy = styled.div`
  color: ${props => props.theme.fontColor.secondary};
`;

const ItemTitleContainer = styled.div`
  text-transform: uppercase;
  padding: 0 0 0 2rem;
  border-left: 5px solid ${props => props.theme.fontColor.mainDark};
  font-weight: bold;
`;

const ItemTitleLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.fontColor.secondary};
  font-size: ${props => props.theme.fontSize.default};

  &:hover {
    color: inherit;
    text-decoration: underline;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    font-size: ${props => props.theme.fontSize.small};
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    font-size: ${props => props.theme.fontSize.medium};
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.extraLarge}) {
    font-size: ${props => props.theme.fontSize.large};
  }
`;

const ItemBody = styled.div`
  font-size: ${props => props.theme.fontSize.default};
  padding: 1rem 0 0 2rem;
  border-left: 5px solid ${props => props.theme.fontColor.mainDark};

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    font-size: ${props => props.theme.fontSize.small};
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.extraLarge}) {
    font-size: ${props => props.theme.fontSize.medium};
  }
`;

const SideNewsItems = ({ sideNewsdata }) => {
  const renderSideNewsItems = sideNewsdata.map(({ description, publishedAt, source, title, url }) => {
    return (
      <ItemContainer key={title}>
        <ItemPublishedContainer>
          <ItemPublishedAt>{new Date(publishedAt).toLocaleString()}</ItemPublishedAt>
          <ItemPublishedBy>{source?.name}</ItemPublishedBy>
        </ItemPublishedContainer>
        <ItemTitleContainer><ItemTitleLink href={url}>{title}</ItemTitleLink></ItemTitleContainer>
        <ItemBody>{description}</ItemBody>
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