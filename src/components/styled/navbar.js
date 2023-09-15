import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../assets/styles";

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  border-bottom: solid 1px #ccc;
`;

export const NavContainer = styled.div`
  height: 10vh;
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  flex: 1;
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
  flex: 1;
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
