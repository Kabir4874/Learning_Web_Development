import { styled } from "styled-components";

export const Button = styled.button`
  padding: 15px 18px;
  min-width: 220px;
  background-color: black;
  border-radius: 5px;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.4s ease;
  &:hover {
    background-color: transparent;
    color: black;
    outline: 1px solid black;
  }
`;
export const OutlineButton = styled(Button)`
  background-color: transparent;
  border: 1px solid black;
  color: black;
  &:hover {
    background-color: black;
    color: white;
    outline: 1px solid black;
  }
`;