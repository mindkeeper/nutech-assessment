import styled from "styled-components";
import { theme } from "../../../../assets/styles";

export const FormContainer = styled.form`
  display: flex;
  width: 100%;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 80%;
  margin: 0 auto;

  @media ${theme.breakPoint.tabletL} {
    width: 60%;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  width: 100%;
`;

export const LeftIcons = styled.div`
  position: absolute;
  bottom: 9%;
  color: grey;
  font-size: 1rem;
  left: 15px;
  user-select: none;
`;

export const Label = styled.label`
  font: 1rem black;
`;

export const Input = styled.input`
  padding: 10px 40px;
  font-size: 1rem;
  border-radius: 4px;
  border: solid 1px grey;

  &:focus {
    outline: auto;
  }
`;
export const EditButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: white;
  color: var(--primary);
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid var(--primary);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  transition: transform 0.2 box-shadow 0.2 ease;
  user-select: none;

  &:not(:disabled):hover {
    transform: scale(1.03);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
  }
`;
