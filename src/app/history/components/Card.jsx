import styled from "styled-components";
import { CustomText } from "../../../components/styled";
import { dateFormatter, delimiterFormatter } from "../../../utils";

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export function Card({ record }) {
  const isTopup = record.transaction_type === "TOPUP";
  return (
    <CardContainer>
      <CardInfo>
        <CustomText
          weight="bold"
          style={{ color: isTopup ? "var(--green)" : "var(--primary)" }}
        >
          {isTopup ? "+" : "-"}
          {` Rp${delimiterFormatter(record.total_amount)}`}
        </CustomText>
        <CustomText size="extraSmall" style={{ color: "#ccc" }}>
          {dateFormatter(record.created_on)}
        </CustomText>
      </CardInfo>
      <CustomText size="extraSmall">{record.description}</CustomText>
    </CardContainer>
  );
}
