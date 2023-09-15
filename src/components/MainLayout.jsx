import { Outlet } from "react-router-dom";
import { Container, Main, MainWrapper, UserSection } from "./styled";
import { Balance, UserInfo, Navbar } from ".";
export function MainLayout() {
  return (
    <Container>
      <Navbar />
      <Main>
        <MainWrapper>
          <UserSection>
            <UserInfo />
            <Balance />
          </UserSection>
          <Outlet />
        </MainWrapper>
      </Main>
    </Container>
  );
}
