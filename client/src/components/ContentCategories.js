import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { color, font, fontsize, mediaq } from "../variables/styling";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
     
  @media only screen and (min-width: ${mediaq.medium}) {
    flex-direction: row;
  }
`;

const ContentCategoryLinks = styled(Link)`
  font-family: ${font.secondary};
  font-weight: bold;
  font-size: ${fontsize.default};
  letter-spacing: 0.2rem;
  color: ${color.font.main};
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  padding: 0 1rem 0 1rem;
  margin: 1rem 0 1rem 0;

  &:hover {
    text-decoration: none;
    color: ${color.font.secondary};
  }
     
  @media only screen and (min-width: ${mediaq.medium}) {
    font-size: ${fontsize.small};
  }
  
  @media only screen and (min-width: ${mediaq.large}) {
    padding: 0 2rem 0 2rem;
  }
     
  @media only screen and (min-width: ${mediaq.extraLarge}) {
    font-size: ${fontsize.medium};
  }
`;

const ContentCategories = ({ categorySelection, country }) => {
  const categories = ["general", "business", "technology", "science", "health", "entertainment"];

  const renderContentCategories = categories.map((category) => {
    return (
      <ContentCategoryLinks key={category} onClick={(event) => {categorySelection(event.target.innerText.toLowerCase())}} to={`/country/${country}/category/${category}`}>{category}</ContentCategoryLinks>
    );
  });

  return (
    <ComponentContainer>
      {renderContentCategories}
    </ComponentContainer>
  );
};

export default ContentCategories;