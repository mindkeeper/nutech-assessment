import { useCallback, useMemo, useState } from "react";
import {
  BlurWrapper,
  CustomLink,
  CustomMobileLink,
  HamburgerWrapper,
  Logo,
  LogoContainer,
  LogoTitle,
  MobileLinkContainer,
  MobileLinks,
  Nav,
  NavContainer,
  NavLinkContainer,
} from "./styled";
import logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

import { GiHamburgerMenu as Hamburger } from "react-icons/gi";
import { IoCloseOutline as Close } from "react-icons/io5";

export function Navbar() {
  const [isClicked, setIsclicked] = useState(false);
  const toggleClick = useCallback(() => setIsclicked((prev) => !prev), []);
  const links = useMemo(
    () => [
      { label: "Top Up", path: "/top-up" },
      { label: "Transaction", path: "/transaction" },
      { label: "History", path: "/history" },
      { label: "Akun", path: "/account" },
    ],
    []
  );
  const navigate = useNavigate();
  return (
    <Nav>
      <NavContainer>
        <LogoContainer
          onClick={() => {
            navigate("/");
          }}
        >
          <Logo src={logo} alt="logo" />
          <LogoTitle>SIMS PPOB</LogoTitle>
        </LogoContainer>
        <NavLinkContainer>
          {links.map((link, idx) => (
            <CustomLink to={link.path} key={idx}>
              {link.label}
            </CustomLink>
          ))}
        </NavLinkContainer>
        <HamburgerWrapper onClick={toggleClick}>
          {isClicked ? <Close /> : <Hamburger />}
        </HamburgerWrapper>
        <BlurWrapper $isActive={isClicked}>
          <MobileLinks>
            {links.map((link, idx) => (
              <MobileLinkContainer
                key={idx}
                onClick={(e) => {
                  e.preventDefault();
                  setIsclicked(false);
                }}
              >
                <CustomMobileLink to={link.path}>{link.label}</CustomMobileLink>
              </MobileLinkContainer>
            ))}
          </MobileLinks>
        </BlurWrapper>
      </NavContainer>
    </Nav>
  );
}
