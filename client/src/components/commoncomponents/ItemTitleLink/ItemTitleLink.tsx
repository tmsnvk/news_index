import React, { FunctionComponent } from "react";
import styled from "styled-components";

const ComponentContainer = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  padding: 0 0 0 2rem;
  border-left: 5px solid ${({ theme }) => theme.color.primaryDark};
`;

const Link = styled.a`
  text-decoration: none;
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

type ComponentType = {
  title: string;
  url: string;
}

const ItemTitleLink: FunctionComponent<ComponentType> = ({ title, url }) => {
  return (
    <ComponentContainer>
      <Link href={url}>{title}</Link>
    </ComponentContainer>
  );
};

export default ItemTitleLink;