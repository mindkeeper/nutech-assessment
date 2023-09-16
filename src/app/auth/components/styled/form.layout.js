import { Link } from "react-router-dom";
import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
`;

export const LeftIcons = styled.div`
  position: absolute;
  top: 31%;
  color: grey;
  font-size: 1rem;
  left: 15px;
  user-select: none;
`;

export const PasswordIcon = styled.div`
  position: absolute;
  top: 31%;
  right: 15px;
  color: grey;
  font-size: 1rem;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
`;

export const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2px;
  justify-content: center;
  margin-top: 1rem;
  font-size: 14px;
  color: grey;
  text-align: center;
`;
export const LinkText = styled.p``;
export const CustomLink = styled(Link)`
  color: var(--primary);
  text-decoration: none;
`;
// export const Link = styled();
