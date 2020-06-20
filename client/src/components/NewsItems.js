import React from "react";
import styled from 'styled-components';
import axios from "axios";

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
  state = { pokename: "" };

  poke = () => {
    axios.get("/bg").then(response => {
      console.log(response);
      
      this.setState({
        pokename: response.data
      })
    });
  };

  render() {
    return (
      <div>
        <GridContentMainContainer>
          <ItemMainContainer>{this.props.bulb}</ItemMainContainer>
        </GridContentMainContainer>
        <GridContentSideContainer>
          <ItemSideContainer>{this.state.pokename}</ItemSideContainer>
        </GridContentSideContainer>
      </div>
    );
  }
}

export default NewsItems;