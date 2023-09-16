import { useCallback, useEffect, useMemo, useState } from "react";
import {
  AmaountWrapper,
  AmountButton,
  FormWrapper,
  Input,
  InputContainer,
  InputIcon,
  InputWrapper,
  OptionContainer,
  TextWrapper,
  TopUpContainer,
  TopUpForm,
  TopUpWrapper,
} from "./components/styled";

import { Button, CustomText } from "../../components/styled";
import { LiaMoneyBillSolid as MoneyIcon } from "react-icons/lia";
import { delimiterFormatter } from "../../utils";
import { Notification, Confirm } from "../../components/modals";
import { toast } from "react-toastify";
import { useModal } from "../../hooks";
import { useSelector } from "react-redux";
import { useTopUpMutation } from "../../redux/reducers/topUpQuery";

export function TopUp() {
  const [topUp, { isSuccess, isError }] = useTopUpMutation();
  const [amount, setAmount] = useState("");
  const [isSubmittable, setIsSubmittable] = useState(false);
  const { isOpen, toggleModal } = useModal();
  const amounts = useMemo(
    () => [10000, 20000, 50000, 100000, 250000, 500000],
    []
  );
  const { accessToken } = useSelector((state) => state.auth);

  const checkAmount = useCallback((amount) => {
    if (!amount) return setIsSubmittable(false);
    return setIsSubmittable(true);
  }, []);

  const handleOptions = useCallback((e, amount) => {
    e.preventDefault();
    setAmount(amount);
  }, []);

  const handleInputChange = useCallback((e) => {
    if (!e.target.value) return setAmount("");
    setAmount(parseInt(e.target.value));
  }, []);

  const handleSubmit = useCallback(() => {
    if (Number(amount) < 10000) {
      toast.error("minimum top up Rp10.000");
      return;
    }

    const body = {
      data: {
        top_up_amount: amount,
      },
      token: accessToken,
    };
    topUp({ ...body });
    toggleModal("notification");
  }, [topUp, accessToken, amount, toggleModal]);

  useEffect(() => {
    checkAmount(amount);
  }, [checkAmount, amount]);

  return (
    <TopUpContainer>
      <TopUpWrapper>
        <TextWrapper>
          <CustomText size="medium">Silahkan Masukkan</CustomText>
          <CustomText size="extraLarge" weight="semibold">
            Nominal Top Up
          </CustomText>
        </TextWrapper>
        <TopUpForm
          onSubmit={(e) => {
            e.preventDefault();
            toggleModal("confirm");
          }}
        >
          <FormWrapper>
            <InputWrapper>
              <InputContainer>
                <InputIcon>
                  <MoneyIcon />
                </InputIcon>
                <Input
                  type="text"
                  placeholder="masukkan jumlah top up"
                  value={amount}
                  onChange={handleInputChange}
                />
              </InputContainer>
              <Button disabled={!isSubmittable} type="submit">
                Top Up
              </Button>
            </InputWrapper>
            <AmaountWrapper>
              <OptionContainer>
                {amounts.map((val, idx) => (
                  <AmountButton
                    key={idx}
                    className={amount === val ? "active" : ""}
                    onClick={(e) => {
                      handleOptions(e, val);
                    }}
                  >
                    Rp{delimiterFormatter(val)}
                  </AmountButton>
                ))}
              </OptionContainer>
            </AmaountWrapper>
          </FormWrapper>
        </TopUpForm>
      </TopUpWrapper>
      {isOpen.confirm && (
        <Confirm
          submit={handleSubmit}
          amount={amount}
          type="TOPUP"
          toggleModal={toggleModal}
        />
      )}
      {isOpen.notification && isSuccess && (
        <Notification
          amount={Number(amount)}
          status="success"
          toggleModal={toggleModal}
          type="TOPUP"
        />
      )}

      {isOpen.notification && isError && (
        <Notification
          type="TOPUP"
          amount={Number(amount)}
          status="failed"
          toggleModal={toggleModal}
        />
      )}
    </TopUpContainer>
  );
}
