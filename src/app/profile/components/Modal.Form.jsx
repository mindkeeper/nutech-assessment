import { CustomText } from "../../../components/styled";
import { Container, CustomButton } from "./styled";
import {
  ButtonWrapper,
  ModalContent,
  ModalFooter,
  ModalWrapper,
} from "./styled";

export function ConfirmModal({ toggleModal, submitHandler }) {
  return (
    <Container>
      <ModalWrapper>
        <ModalContent>
          <CustomText>Simpan perubahan?</CustomText>
        </ModalContent>
        <ModalFooter>
          <ButtonWrapper>
            <CustomButton onClick={submitHandler}>Ya</CustomButton>
            <CustomButton
              $type="logout"
              onClick={(e) => toggleModal(e, "confirm")}
            >
              Tidak
            </CustomButton>
          </ButtonWrapper>
        </ModalFooter>
      </ModalWrapper>
    </Container>
  );
}
