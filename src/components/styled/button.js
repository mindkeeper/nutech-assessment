import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: var(--bg-primary);
  color: white;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s transform 0.2 box-shadow 0.2 ease;
  user-select: none;

  &:not(:disabled):hover {
    background-color: #db3712;
    transform: scale(1.03);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
  }
  &:disabled {
    background-color: grey;
    cursor: not-allowed;
  }
`;
