import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const GridContentCategories = styled.section`
  grid-area: grid-categories;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ContentCategoriesLinks = styled(Link)`
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
  color: var(--font-color-one);
  text-decoration: none;
  text-transform: uppercase;
  padding: 0 3rem 0 3rem;
  margin: 3rem 0 5rem 0;

  &:hover {
    text-decoration: none;
    color: var(--font-color-three);
  }

  @media only screen and (max-width: 1200px) {
    font-size: 1.2rem;
    padding: 0 2rem 0 2rem;
    margin: 3rem 0 5rem 0;
  }

  @media only screen and (max-width: 992px) {
    letter-spacing: 0;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ContentCategories = ({ categorySelection, country }) => {
  const categories = ["general", "business", "technology", "science", "health", "entertainment"];

  const renderContentCategories = categories.map((category) => {
    return (
      <ContentCategoriesLinks key={category} onClick={(event) => {categorySelection(event.target.innerText.toLowerCase())}} to={`/country/${country}/category/${category}`}>{category}</ContentCategoriesLinks>
    );
  });

  return (
    <GridContentCategories>
      {renderContentCategories}
    </GridContentCategories>
  );
};

export default ContentCategories;