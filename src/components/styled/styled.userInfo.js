import styled from "styled-components";
import { theme } from "../../assets/styles";

export const UserInfoContainer = styled.div`
  flex: 1;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (${theme.breakPoint.tabletL}) {
    align-items: start;
  }
`;

export const UserImage = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 1px solid grey;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  /* gap: 1rem; */
`;
