import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
     
  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    flex-direction: row;
  }
`;

const ContentCategoryLinks = styled(Link)`
  font-family: ${props => props.theme.fontFamily.secondary};
  font-weight: bold;
  font-size: ${props => props.theme.fontSize.default};
  letter-spacing: 0.2rem;
  color: ${props => props.theme.fontColor.mainDark};
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  padding: 0 1rem 0 1rem;
  margin: 1rem 0 1rem 0;

  &:hover {
    text-decoration: none;
    color: ${props => props.theme.fontColor.secondary};
  }
     
  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    font-size: ${props => props.theme.fontSize.small};
  }
  
  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    padding: 0 2rem 0 2rem;
  }
     
  @media only screen and (min-width: ${props => props.theme.mediaQueries.extraLarge}) {
    font-size: ${props => props.theme.fontSize.medium};
  }
`;

const ContentCategories = ({ categorySelection, country }) => {
  const categories = ["general", "business", "technology", "science", "health", "entertainment"];

  const renderContentCategories = categories.map((category) => {
    const handleOnClick = () => categorySelection(category);
    
    return (
      <ContentCategoryLinks key={category} onClick={handleOnClick} to={`/country/${country}/category/${category}`}>{category}</ContentCategoryLinks>
    );
  });

  return (
    <ComponentContainer>
      {renderContentCategories}
    </ComponentContainer>
  );
};

export default ContentCategories;