import React, { FunctionComponent, MouseEvent, useContext } from "react";
import { MainContext } from "utilities/context/MainContext";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
     
  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    flex-direction: row;
  }
`;

const ContentCategoryLinks = styled(Link)`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.default};
  letter-spacing: 0.2rem;
  color: ${({ theme }) => theme.color.primaryDark};
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  padding: 0 1rem 0 1rem;
  margin: 1rem 0 1rem 0;

  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.color.secondary};
  }
     
  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
  
  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    padding: 0 2rem 0 2rem;
  }
     
  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

const ContentCategories: FunctionComponent = () => {
  const { country, setCategory, pageTitle, titleCategory, setTitleCategory } = useContext(MainContext);

  const categories = ["general", "business", "technology", "science", "health", "entertainment"];

  const renderContentCategories = categories.map((category) => {
    const handleOnClick = (event: MouseEvent<HTMLAnchorElement>): void => {
      setCategory(category);
      setTitleCategory(category);
    };

    return (
      <ContentCategoryLinks key={category} onClick={handleOnClick} to={`/country/${country}/category/${category}`}>{category}</ContentCategoryLinks>
    );
  });

  return (
    <ComponentContainer>
      <Helmet>
        <title>{`${pageTitle}`} {`${titleCategory}`} {`news`}</title>
      </Helmet>
      {renderContentCategories}
    </ComponentContainer>
  );
};

export default ContentCategories;