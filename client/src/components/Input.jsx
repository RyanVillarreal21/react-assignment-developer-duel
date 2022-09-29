import styled from "styled-components";

const Input = styled.input`
  height: 50px;
  width: 250px;
  border-radius: 8px;
  position: ${({ p }) => p};
  top: ${({ t }) => t};
  left: ${({ l }) => l};
  align-items: center;
  font-size: 20px;
  text-align: center;
`;

export default Input;
