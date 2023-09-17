import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logout } from "../../redux/reducers/authSlice";
import { Container, CustomText } from "../styled";
import {
  ButtonWrapper,
  LogoutButton,
  ModalContent,
  ModalFooter,
  ModalWrapper,
} from ".";
import { useCallback } from "react";

export function LogoutModal({ toggleModal }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(logout());
      toast.success("Logout berhasil");
      navigate("/login", { replace: true });
    },
    [dispatch, navigate]
  );
  return (
    <Container>
      <ModalWrapper>
        <ModalContent>
          <CustomText>Apakah anda yakin ingin keluar?</CustomText>
        </ModalContent>
        <ModalFooter>
          <ButtonWrapper>
            <LogoutButton $type="logout" onClick={logoutHandler}>
              Ya
            </LogoutButton>
            <LogoutButton onClick={(e) => toggleModal(e, "logout")}>
              Tidak
            </LogoutButton>
          </ButtonWrapper>
        </ModalFooter>
      </ModalWrapper>
    </Container>
  );
}
