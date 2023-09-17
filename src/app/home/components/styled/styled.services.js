import styled from "styled-components";
import { theme } from "../../../../assets/styles";

export const ServiceContainer = styled.section`
  width: 100%;
  display: flex;
`;
export const ServiceWrapper = styled.div`
  display: grid;
  width: 100%;
  justify-items: center;
  align-items: center;

  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);

  @media (${theme.breakPoint.tabletS}) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  @media (${theme.breakPoint.tabletL}) {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  @media (${theme.breakPoint.desktopL}) {
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
`;

export const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 7rem;
  padding: 8px;
  border-radius: 4px;
  align-items: center;
  cursor: pointer;
  user-select: none;
  transition: box-shadow 0.4, transform 0.2 ease;
  &:hover {
    /* box-shadow: 2px 2px 2px black; */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    transform: scale(1.02);
  }
`;
export const ServiceImage = styled.img`
  width: 3rem;
  height: 3rem;

  @media (${theme.breakPoint.tabletL}) {
    width: 4rem;
    height: 4rem;
  }
`;
