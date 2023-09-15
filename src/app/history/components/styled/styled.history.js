import styled from "styled-components";

export const HistoryContainer = styled.section`
  display: flex;
  width: 100%;
`;

export const HistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HistoryList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ShowMore = styled.button`
  border: none;
  color: var(--primary);
  font-size: 1rem;
  background: none;
  cursor: pointer;
  transition: transform 0.2 ease;
  &:hover {
    transform: scale(1.02);
  }
`;
