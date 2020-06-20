import React from "react";
import styled from 'styled-components';

const GridContentMainContainer = styled.section`
  grid-area: grid-content-main;
  width: 90%;
  margin: 0 auto;
`;

const GridContentSideContainer = styled.section`
  grid-area: grid-content-side;
  width: 60%;
  margin: 0 auto;
`;

const ItemMainContainer = styled.div`

`;

const ItemSideContainer = styled.div`

`;

class NewsItems extends React.Component {
  render() {
    return (
      <div>
        <GridContentMainContainer>
          <ItemMainContainer>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</ItemMainContainer>
        </GridContentMainContainer>
        <GridContentSideContainer>
          <ItemSideContainer>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</ItemSideContainer>
        </GridContentSideContainer>
      </div>
    );
  }
}

export default NewsItems;