import styled from "styled-components";

export const ButtonSelectContainer = styled.button`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 2px solid transparent;
  border-radius: 18px;
  padding: ${({ padding }) => (padding ? padding : "20px 0")};
  width: 100%;
  font-family: Gilroy !important;
  font-weight: bold;
  font-size: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  cursor: pointer;

  &:hover {
    border: 2px solid #c3ff4d;
  }
`;
