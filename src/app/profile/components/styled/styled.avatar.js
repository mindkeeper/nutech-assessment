import styled from "styled-components";

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  position: relative;
  height: 15vh;
  /* width: 100%; */
  justify-content: center;
`;
export const AvatarImage = styled.img`
  height: 100%;
  aspect-ratio: auto;
  border-radius: 50%;
`;

export const EditIcon = styled.div`
  position: absolute;
  font-size: 1rem;
  bottom: 0;
  right: 3%;
  border-radius: 50%;
  cursor: ${(props) => (props.$editable ? "pointer" : "auto")};
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  background-color: white;
`;
