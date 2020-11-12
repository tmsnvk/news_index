import React, { FunctionComponent } from "react";
import styled from "styled-components";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
  width: 80%;
  margin: 0 auto;
     
  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-start: 1;
    grid-column-end: 2;
  }
  
  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    width: 90%;
  }
`;

const ItemContainer = styled.div`
  margin: 0 0 2rem 0;
`;

const ItemImage = styled.img`
  padding: 3rem 0 1rem 0;
  width: 100%;
`;

const ItemPublishedContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: ${({ theme }) => theme.fontSize.default};
  font-weight: bold;
  padding: 1rem 0 1rem 0;
`;

const ItemPublishedAt = styled.div`
  padding: 0 1rem 0 0;
`;

const ItemPublishedBy = styled.div`
  color: ${({ theme }) => theme.color.secondary};
`;

const ItemTitleContainer = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  padding: 0 0 0 2rem;
  border-left: 5px solid ${({ theme }) => theme.color.primaryDark};
`;

const ItemTitleLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.secondary};
  font-size: ${({ theme }) => theme.fontSize.default};

  &:hover {
    color: inherit;
    text-decoration: underline;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.small}) {
    font-size: ${({ theme }) => theme.fontSize.small};
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    font-size: ${({ theme }) => theme.fontSize.large};
  }
`;

const ItemBody = styled.div`
  font-size: ${({ theme }) => theme.fontSize.default};
  padding: 1rem 0 0 2rem;
  border-left: 5px solid ${({ theme }) => theme.color.primaryDark};

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.small};
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

type Props = {
  mainNewsData: {
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

const MainNewsItems: FunctionComponent<Props> = ({ mainNewsData }) => {
  const renderMainNewsItems = mainNewsData.map(({ description, publishedAt, source, title, url, urlToImage }) => {
    return (
      <ItemContainer key={title}>
        {urlToImage !== null ? <ItemImage src={urlToImage} alt={title} /> : null}
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
      {renderMainNewsItems}
    </ComponentContainer>
  );
};

export default MainNewsItems;