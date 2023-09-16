import {
  CircleImage,
  Container,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalWrapper,
  SubmitButton,
} from ".";
import { CustomText } from "../styled";
import { delimiterFormatter } from "../../utils";
import { BsCheck2 as SuccessIcon } from "react-icons/bs";
import { RxCross2 as FailedIcon } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

export function Notification({
  status,
  amount,
  toggleModal,
  type,
  transactionType,
}) {
  const navigate = useNavigate();
  return (
    <Container>
      <ModalWrapper>
        <ModalHeader>
          <CircleImage type={status}>
            {status === "success" ? <SuccessIcon /> : <FailedIcon />}
          </CircleImage>
        </ModalHeader>
        <ModalContent>
          <CustomText size="extraSmall" style={{ textAlign: "center" }}>
            {type === "TOPUP"
              ? "Top Up sebesar"
              : `pembelian ${transactionType.toLowerCase()} sebesar`}
          </CustomText>

          <CustomText
            weight="bold"
            size="small"
            style={{ textAlign: "center" }}
          >
            Rp{delimiterFormatter(amount)}
          </CustomText>
          <CustomText size="extraSmall" style={{ textAlign: "center" }}>
            {status === "success" ? "Berhasil" : "Gagal"}
          </CustomText>
        </ModalContent>
        <ModalFooter>
          <SubmitButton
            onClick={() => {
              toggleModal("notification");
              navigate("/");
            }}
          >
            Kembali ke beranda
          </SubmitButton>
        </ModalFooter>
      </ModalWrapper>
    </Container>
  );
}
