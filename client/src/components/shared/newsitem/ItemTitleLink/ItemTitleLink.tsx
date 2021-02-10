import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.div`
  padding: 0 0 0 2rem;
  border-left: 5px solid ${({ theme }) => theme.color.grayDark};
`;

const Link = styled.a`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: 600;
  color: ${({ theme }) => theme.color.greenDark};
  text-transform: uppercase;

  &:hover {
    color: inherit;
    text-decoration: underline;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.mediaQuery.xLarge}) {
    font-size: ${({ theme }) => theme.fontSize.large};
  }
`;

type TComponent = {
  title: string;
  url: string;
};

// @description - renders <ItemTitleLink /> element.
const ItemTitleLink = ({ title, url }: TComponent) => {
  return (
    <ComponentContainer>
      <Link href={url}>{title}</Link>
    </ComponentContainer>
  );
};

export default ItemTitleLink;