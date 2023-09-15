import styled from "styled-components";

export const ServiceContainer = styled.section`
  width: 100%;
  display: flex;
`;
export const ServiceWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* gap: 1rem; */
  width: 100%;
  justify-content: space-between;
`;
export const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 7rem;
  padding: 8px;
  border-radius: 4px;
  align-items: center;
  cursor: pointer;
  user-select: none;
  transition: box-shadow 0.4, transform 0.2 ease;
  &:hover {
    /* box-shadow: 2px 2px 2px black; */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    transform: scale(1.02);
  }
`;
export const ServiceImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;
