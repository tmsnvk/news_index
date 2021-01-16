import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { MainContext } from "../../utilities/context/MainContext";
import categoryList from "../../utilities/helpers/resources/categoryList";
import trackClick from "../../utilities/analytics/trackEvent";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
    width: 100%;
  }
`;

const ContentCategoryLinks = styled(Link)`
  margin: 1rem 0 1rem 0;
  padding: 0 1rem 0 1rem;
  font-size: ${({ theme }) => theme.fontSize.default};
  color: ${({ theme }) => theme.color.grayDark};
  font-weight: 600;
  letter-spacing: 0.2rem;
  text-transform: uppercase;

  &:hover {
    color: ${({ theme }) => theme.color.greenDark};
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.small};
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    margin: 2rem 0 2rem 0;
    padding: 0 2rem 0 2rem;
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

const ContentCategories = () => {
  const { country, setCategory, pageTitle, titleCategory, setTitleCategory } = useContext(MainContext);

  const renderContentCategories = categoryList.map((category) => {
    const handleOnClick = () => {
      setCategory(category);
      setTitleCategory(category);
      trackClick(category);
    };

    return (
      <ContentCategoryLinks key={category} onClick={handleOnClick} to={`/country/${country}/category/${category}`}>
        {category}
      </ContentCategoryLinks>
    );
  });

  return (
    <ComponentContainer>
      <Helmet>
        <title>{`${pageTitle} ${titleCategory} news`}</title>
      </Helmet>
      {renderContentCategories}
    </ComponentContainer>
  );
};

export default ContentCategories;