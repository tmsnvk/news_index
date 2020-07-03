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
  color: var(--font-color-primary);
  text-decoration: none;
  text-transform: uppercase;
  padding: 0 3rem 0 3rem;
  margin: 3rem 0 5rem 0;

  &:hover {
    text-decoration: none;
    color: var(--body-color-tertiary);
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

class ContentCategories extends React.Component {
  handleSwitchCategory = (event) => {
    this.props.switchCategory(event);
  }

  render() {
    return (
      <GridContentCategories>
        <ContentCategoriesLinks onClick={this.handleSwitchCategory} to="/category/general">General</ContentCategoriesLinks>
        <ContentCategoriesLinks onClick={this.handleSwitchCategory} to="/category/business">Business</ContentCategoriesLinks>
        <ContentCategoriesLinks onClick={this.handleSwitchCategory} to="/category/technology">Technology</ContentCategoriesLinks>
        <ContentCategoriesLinks onClick={this.handleSwitchCategory} to="/category/science">Science</ContentCategoriesLinks>
        <ContentCategoriesLinks onClick={this.handleSwitchCategory} to="/category/health">Health</ContentCategoriesLinks>
        <ContentCategoriesLinks onClick={this.handleSwitchCategory} to="/category/entertainment">Entertainment</ContentCategoriesLinks>
      </GridContentCategories>
    );
  };
};

export default ContentCategories;