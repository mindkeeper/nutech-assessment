import { Button, CustomText } from "../../components/styled";
import { Services } from "./components";
import {
  FormContainer,
  FormWrapper,
  Input,
  InputContainer,
  InputIcon,
  TextWrapper,
  TransactionContainer,
  TransactionWrapper,
  TypeContainer,
  TypeIcon,
} from "./components/styled";

import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useMemo, useEffect, useState, useCallback } from "react";
import { LiaMoneyBillSolid as MoneyIcon } from "react-icons/lia";
import { useSearchParams } from "react-router-dom";
import { delimiterFormatter } from "../../utils";
import { useModal } from "../../hooks";
import { Confirm, Notification } from "../../components/modals";
import { useGetServicesQuery } from "../../redux/reducers/serviceQuery";
import { useGetBalanceQuery } from "../../redux/reducers/balanceQuery";
import { useCreateTransactionMutation } from "../../redux/reducers/transactionQuery";

export function Transaction() {
  const { accessToken } = useSelector((state) => state.auth);
  const [searchParams, setSearchParams] = useSearchParams();
  const type = useMemo(() => searchParams.get("type"), [searchParams]);
  const { data: services, isSuccess } = useGetServicesQuery({
    token: accessToken,
  });
  const [matchedService, setMatchingService] = useState(null);
  const { data } = useGetBalanceQuery({ token: accessToken });
  const [createTransaction, { isSuccess: isSuccessTransaction, isError }] =
    useCreateTransactionMutation();

  const { isOpen, toggleModal } = useModal();

  const handleSearchParams = useCallback(
    (e, param) => {
      e.preventDefault();
      searchParams.set("type", param);
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams]
  );

  useEffect(() => {
    if (type !== undefined && services) {
      const foundService = services.find(
        (service) => service.service_code === type
      );
      setMatchingService(foundService);
    } else {
      setMatchingService(null);
    }
  }, [services, type]);

  const handleSubmit = useCallback(() => {
    if (data?.balance < matchedService.service_tariff)
      return toast.error("Saldo kamu tidak cukup");

    createTransaction({
      data: { service_code: matchedService.service_code },
      token: accessToken,
    });
    toggleModal("notification");
  }, [
    matchedService?.service_tariff,
    data?.balance,
    createTransaction,
    matchedService?.service_code,
    accessToken,
    toggleModal,
  ]);

  return (
    <TransactionContainer>
      <TransactionWrapper>
        <TextWrapper>
          <CustomText size="medium">Pilih pembayaran</CustomText>
        </TextWrapper>
        {isSuccess && (
          <Services
            handleParam={handleSearchParams}
            isSuccess={isSuccess}
            services={services}
          />
        )}
        {type && matchedService && (
          <>
            <TextWrapper>
              <CustomText size="medium">Pembayaran</CustomText>
              <TypeContainer>
                <TypeIcon src={matchedService?.service_icon} alt="logo" />
                <CustomText weight="bold">
                  {matchedService?.service_name}
                </CustomText>
              </TypeContainer>
            </TextWrapper>
            <FormContainer>
              <FormWrapper>
                <InputContainer>
                  <InputIcon>
                    <MoneyIcon />
                  </InputIcon>
                  <Input>{`Rp${delimiterFormatter(
                    matchedService?.service_tariff
                  )}`}</Input>
                </InputContainer>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleModal("confirm");
                  }}
                >
                  Bayar
                </Button>
              </FormWrapper>
            </FormContainer>
          </>
        )}
      </TransactionWrapper>
      {isOpen.confirm && (
        <Confirm
          submit={handleSubmit}
          amount={Number(matchedService.service_tariff)}
          type="TRANSACTION"
          transactionType={matchedService.service_name}
          toggleModal={toggleModal}
        />
      )}
      {isOpen.notification && isSuccessTransaction && (
        <Notification
          amount={Number(matchedService.service_tariff)}
          status="success"
          toggleModal={toggleModal}
          type="TRANSACTION"
          transactionType={matchedService.service_name}
        />
      )}
      {isOpen.notification && isError && (
        <Notification
          transactionType={matchedService.service_name}
          type="TRANSACTION"
          amount={Number(matchedService.service_tariff)}
          status="failed"
          toggleModal={toggleModal}
        />
      )}
    </TransactionContainer>
  );
}
