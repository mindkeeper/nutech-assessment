import styled from "styled-components";

export const TransactionContainer = styled.section`
  display: flex;
  width: 100%;
`;

export const TransactionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TypeContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const TypeIcon = styled.img`
  user-select: none;
  width: 40px;
  height: 40px;
`;

export const FormContainer = styled.form`
  display: flex;
  width: 100%;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
`;
export const InputIcon = styled.div`
  position: absolute;
  top: 30%;
  color: grey;
  font-size: 1rem;
  left: 15px;
  user-select: none;
`;

export const Input = styled.div`
  padding: 10px 40px;
  height: 3rem;
  font-size: 1rem;
  border-radius: 4px;
  border: solid 1px grey;
  /* outline: none; */

  &:focus {
    outline: auto;
  }
`;
