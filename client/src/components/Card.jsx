import styled from "styled-components";

const Card = styled.div`
  height: ${({ h }) => h};
  width: ${({ w }) => w};
  position: ${({ p }) => p};
  top: ${({ t }) => t};
  left: ${({ l }) => l};
  right: ${({ r }) => r};
  border: 5px solid black;
  border-radius: 15px;
  padding: 15px;
  float: right;
`;
export default Card;
