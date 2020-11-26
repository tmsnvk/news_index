import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  padding: 0 0 0 2rem;
  border-left: 5px solid ${({ theme }) => theme.color.primaryDark};
`;

const Link = styled.a`
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

type TComponent = {
  title: string;
  url: string;
}

const ItemTitleLink = ({ title, url }: TComponent) => {
  return (
    <ComponentContainer>
      <Link href={url}>{title}</Link>
    </ComponentContainer>
  );
};

export default ItemTitleLink;