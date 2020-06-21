import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from 'styled-components';

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
  color: var(--font-color-primary);
  text-decoration: none;
  text-transform: uppercase;
  padding: 0 3rem 0 3rem;
  margin: 3rem 0 5rem 0;

  &:hover {
  text-decoration: none;
  color: var(--body-color-tertiary);
  }
`;

const ContentCategories = () => {
  return (
    <GridContentCategories>
      <Router>
        <ContentCategoriesLinks to="/general">General</ContentCategoriesLinks>
        <ContentCategoriesLinks to="/business">Business</ContentCategoriesLinks>
        <ContentCategoriesLinks to="/technology">Technology</ContentCategoriesLinks>
        <ContentCategoriesLinks to="/science">Science</ContentCategoriesLinks>
        <ContentCategoriesLinks to="/health">Health</ContentCategoriesLinks>
        <ContentCategoriesLinks to="/entertainment">Entertainment</ContentCategoriesLinks>
      </Router>
    </GridContentCategories>
  );
};

export default ContentCategories;