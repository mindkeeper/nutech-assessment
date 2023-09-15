import { useMemo } from "react";
import {
  CustomLink,
  Logo,
  LogoContainer,
  LogoTitle,
  Nav,
  NavContainer,
  NavLinkContainer,
} from "./styled";
import logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

export function Navbar() {
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
            navigate("/home");
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
      </NavContainer>
    </Nav>
  );
}
