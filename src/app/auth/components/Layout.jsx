import {
  Banner,
  BannerContainer,
  Container,
  FormContainer,
  FormContent,
  FormWrapper,
  Logo,
  LogoContainer,
  LogoTitle,
  Title,
  Wrapper,
} from "./styled";
import { useLocation } from "react-router-dom";
import authImage from "../../../assets/images/auth-image.png";
import logo from "../../../assets/images/logo.png";
export function Layout({ children }) {
  const param = useLocation();
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <LogoContainer>
            <Logo src={logo} alt="logo" />
            <LogoTitle>SIMS PPOB</LogoTitle>
          </LogoContainer>
          <Title>
            {param.pathname === "/login"
              ? "Masuk atau buat akun untuk memulai"
              : "Lengkapi data untuk membuat akun"}
          </Title>
          <FormWrapper>
            <FormContent>{children}</FormContent>
          </FormWrapper>
        </FormContainer>
        <BannerContainer>
          <Banner src={authImage} alt="banner" />
        </BannerContainer>
      </Wrapper>
    </Container>
  );
}
