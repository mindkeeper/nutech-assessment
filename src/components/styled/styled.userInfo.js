import styled from "styled-components";
import { theme } from "../../assets/styles";

export const UserInfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  @media (${theme.breakPoint.tabletL}) {
    align-items: start;
  }
`;

export const UserImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 1px solid grey;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  /* gap: 1rem; */
`;
