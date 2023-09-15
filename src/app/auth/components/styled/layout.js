import { styled } from "styled-components";

import { theme } from "../../../../assets/styles";
export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  /* overflow-x: hidden; */
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const FormContainer = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const FormWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoContainer = styled.div`
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
export const Logo = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;
export const LogoTitle = styled.h1`
  font-weight: 700;
  color: black;
  font-size: 20px;
`;

export const Title = styled.h2`
  font-weight: 700;
  color: black;
  font-size: 24px;
  width: 270px;
  text-align: center;
`;
export const BannerContainer = styled.section`
  flex: 1;
  display: none;
  @media (${theme.breakPoint.tabletL}) {
    display: flex;
  }
`;

export const Banner = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

export const FormContent = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: center;
`;
