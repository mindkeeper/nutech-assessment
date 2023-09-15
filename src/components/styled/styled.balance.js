import styled from "styled-components";
import bgBalance from "../../assets/images/bg-balance.png";

export const BalanceContainer = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  background: url(${bgBalance});
  background-repeat: no-repeat;
  border-radius: 10px;
`;
export const BalanceInfo = styled.div`
  padding: 14px 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
`;
