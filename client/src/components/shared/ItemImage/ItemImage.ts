import styled from "styled-components";

const ItemImage = styled.img`
  display: block;
  width: ${({ alt }) => alt !== "image not found" ? "100%" : "25%"};
  margin: ${({ alt }) => alt === "image not found" ? "auto" : null};
  padding: 3rem 0 1rem 0;
`;

export default ItemImage;