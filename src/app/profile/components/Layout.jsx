import { Container, Main, MainWrapper } from "../../../components/styled";
import { Navbar } from "../../../components";
import { Outlet } from "react-router-dom";

export function ProfileLayout() {
  return (
    <Container>
      <Navbar />
      <Main>
        <MainWrapper>
          <Outlet />
        </MainWrapper>
      </Main>
    </Container>
  );
}
