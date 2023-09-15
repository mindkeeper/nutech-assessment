import {
  CancelButton,
  Container,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalImg,
  ModalWrapper,
  SubmitButton,
} from ".";

import { useCallback } from "react";
import logo from "../../assets/images/logo.png";
import { CustomText } from "../styled";
import { delimiterFormatter } from "../../utils";

export function Confirm({
  toggleModal,
  submit,
  type,
  amount,
  transactionType,
}) {
  const submitHandler = useCallback(
    (e) => {
      e.preventDefault();

      submit();
      toggleModal("confirm");
      toggleModal("notification");
    },
    [submit, toggleModal]
  );

  return (
    <Container>
      <ModalWrapper>
        <ModalHeader>
          <ModalImg src={logo} alt="logo" />
        </ModalHeader>
        <ModalContent>
          <CustomText size="extraSmall" style={{ textAlign: "center" }}>
            {type === "TOPUP"
              ? "Apakah anda yakin untuk top up sebesar"
              : `Beli ${transactionType.toLowerCase()} senilai`}
          </CustomText>

          <CustomText
            weight="bold"
            size="small"
            style={{ textAlign: "center" }}
          >
            Rp{delimiterFormatter(parseInt(amount.toString()))}
          </CustomText>
        </ModalContent>
        <ModalFooter>
          <SubmitButton
            onClick={(e) => {
              submitHandler(e);
            }}
          >
            Ya, lanjutkan {type === "TOPUP" ? "Top Up" : "Bayar"}
          </SubmitButton>
          <CancelButton
            onClick={() => {
              toggleModal("confirm");
            }}
          >
            Batalkan
          </CancelButton>
        </ModalFooter>
      </ModalWrapper>
    </Container>
  );
}
