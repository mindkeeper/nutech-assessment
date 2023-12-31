import styled from "styled-components";
import { theme } from "../../assets/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Main = styled.main`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  width: 100%;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  width: 90%;
  margin: 0 auto;

  @media (${theme.breakPoint.tabletL}) {
    gap: 4rem;
  }
`;

export const UserSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40vh;

  @media (${theme.breakPoint.tabletL}) {
    align-items: flex-start;
    flex-direction: row;
    height: auto;
  }
`;
