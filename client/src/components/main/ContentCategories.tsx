import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PROJECT_ROOT } from "utilities/helpers/constants";
import { MainContext } from "utilities/context/MainContext";
import categoryList from "utilities/data/texts/categoryList";
import { trackClick } from "utilities/helpers/analytics";

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

// @description; renders <ContentCategories /> element.
const ContentCategories = () => {
  // @description - context elements.
  const { countryCode, setCategoryCode } = useContext(MainContext);

  // @description; renders content category links.
  // @{category}; fetches the correct data, analytics tracking and for head title element.
  const renderContentCategoryLinks = categoryList.map((categoryCode) => {
    // @description; sets context elements and analytics tracking when one of the links gets clicked.
    const handleOnClick = (): void => {
      setCategoryCode(categoryCode);
      trackClick(categoryCode);
    };

    return (
      <ContentCategoryLinks key={categoryCode} onClick={handleOnClick} to={`/${PROJECT_ROOT}/data/${countryCode}/${categoryCode}`}>
        {categoryCode}
      </ContentCategoryLinks>
    );
  });

  return (
    <ComponentContainer>
      {renderContentCategoryLinks}
    </ComponentContainer>
  );
};

export default ContentCategories;