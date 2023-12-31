import styled from "styled-components";
import bgBalance from "../../assets/images/bg-balance.png";

export const BalanceContainer = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  background: url(${bgBalance});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
`;
export const BalanceInfo = styled.div`
  padding: 14px 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: white;
`;
export const VisbilityWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const IconWrapper = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
`;
