import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../assets/styles";

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  border-bottom: solid 1px #ccc;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavContainer = styled.div`
  height: 10vh;
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const Logo = styled.img`
  width: 2rem;
  height: 2rem;
`;
export const LogoTitle = styled.h1`
  font-weight: 700;
  color: black;
  font-size: 16px;
`;

export const NavLinkContainer = styled.div`
  display: none;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  gap: 3rem;

  @media (${theme.breakPoint.tabletL}) {
    display: flex;
  }
`;

export const CustomLink = styled(NavLink)`
  font-size: 1rem;
  text-decoration: none;
  color: black;
  font-weight: bold;
  &.active {
    color: var(--primary);
  }
`;

export const HamburgerWrapper = styled.div`
  font-size: 20px;
  color: var(--primary);
  display: flex;
  cursor: pointer;

  @media (${theme.breakPoint.tabletL}) {
    display: none;
  }
`;

export const BlurWrapper = styled.div`
  height: 100vh;
  width: 100vh;
  position: absolute;
  z-index: 100;
  right: -5%;
  top: 100%;
  display: ${(props) => (props.$isActive ? "flex" : "none")};
  backdrop-filter: blur(5px);
  @media (${theme.breakPoint.tabletL}) {
    display: none;
  }
`;
export const MobileLinks = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f6f7fc;
  align-items: flex-end;
  gap: 1rem;
  position: absolute;
  border: 1px solid #ccc;
  padding: 1rem 0;
  height: 100vh;
  right: 0;
  top: 0;
  z-index: 200;

  @media (${theme.breakPoint.tabletL}) {
    display: none;
  }
`;

export const MobileLinkContainer = styled.div`
  width: 100%;
  padding: 0 1rem 0 2rem;
  display: flex;
  justify-content: end;
  &:hover {
    background-color: #a8a8a8;
  }
`;
export const CustomMobileLink = styled(NavLink)`
  font-size: 1rem;
  width: 100%;
  text-align: end;
  text-decoration: none;
  color: #596076;
  font-weight: bold;
  &:hover {
    color: white;
  }
  &.active {
    color: var(--primary);
  }
  &.active:hover {
    color: white;
  }
`;
