import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFoundLink = styled(Link)`
  color: ${({ theme }) => theme.color.greenDark};
  font-weight: 600;

  &:hover {
    color: inherit;
    text-decoration: underline;
  }
`;

type TData = {
  message: {
    pOne: string;
    pTwo: ReactElement;
  };
}

const notFoundData: TData = {
  message: {
    pOne: "This page does not exist.",
    pTwo: <><NotFoundLink to={"/newsindex"}>Click here to get back</NotFoundLink> to the main page.</>
  }
};

export default notFoundData;