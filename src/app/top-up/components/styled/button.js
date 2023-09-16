import styled from "styled-components";

export const AmountButton = styled.button`
  width: 100px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  outline: none;

  &.active {
    background-color: var(--bg-primary);
    color: #ffffff;
    border: none;
  }
`;
