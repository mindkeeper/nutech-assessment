import { useCallback, useMemo, useState } from "react";
import {
  BalanceContainer,
  BalanceInfo,
  CustomText,
  IconWrapper,
  VisbilityWrapper,
} from "./styled";
import { delimiterFormatter } from "../utils";
import { useSelector } from "react-redux";
import { useGetBalanceQuery } from "../redux/reducers/balanceQuery";
import { BsEye, BsEyeSlash } from "react-icons/bs";
export function Balance() {
  const { accessToken } = useSelector((state) => state.auth);
  const { data, isSuccess } = useGetBalanceQuery({ token: accessToken });
  const [isVisible, setIsVisible] = useState(false);
  const largeDot = useMemo(() => "\u2022", []);
  const toggleVisibility = useCallback(() => {
    setIsVisible((prev) => !prev);
  }, []);

  return (
    <BalanceContainer>
      <BalanceInfo>
        <CustomText weight="base" size="medium">
          Saldo anda
        </CustomText>
        {isSuccess && (
          <CustomText weight="bold" size="extraLarge">
            Rp{" "}
            {isVisible ? delimiterFormatter(data?.balance) : largeDot.repeat(6)}
          </CustomText>
        )}
        <VisbilityWrapper>
          <CustomText
            size="extraSmall"
            $select={false}
            cursor="pointer"
            onClick={toggleVisibility}
          >
            {!isVisible ? "Lihat saldo" : "Sembunyikan"}
          </CustomText>
          <IconWrapper>{isVisible ? <BsEyeSlash /> : <BsEye />}</IconWrapper>
        </VisbilityWrapper>
      </BalanceInfo>
    </BalanceContainer>
  );
}
