import styled from "styled-components";
import { theme } from "../../../../assets/styles";

export const TopUpContainer = styled.section`
  display: flex;
  width: 100%;
`;

export const TopUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 1rem; */
`;

export const TopUpForm = styled.form`
  width: 100%;
  display: flex;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  gap: 1rem;

  @media (${theme.breakPoint.tabletL}) {
    flex-direction: row;
  }
`;

export const InputWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;

export const InputIcon = styled.div`
  position: absolute;
  top: 31%;
  color: grey;
  font-size: 1rem;
  left: 15px;
  user-select: none;
`;

export const Input = styled.input`
  padding: 16px 40px;
  font-size: 1rem;
  border-radius: 4px;
  border: solid 1px grey;
  width: 100%;
  /* outline: none; */

  &:focus {
    outline: auto;
  }
`;

export const AmaountWrapper = styled.div`
  flex: 1;
`;
export const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

  @media (${theme.breakPoint.desktopL}) {
    width: 90%;
  }
`;
