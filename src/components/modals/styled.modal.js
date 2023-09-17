import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  z-index: 0;
  height: 100vh;
  width: 100vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;

  z-index: 100;
  border-radius: 12px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 2rem 3rem;
`;

export const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CircleImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${(props) =>
    props.type === "failed" ? "var(--bg-primary)" : "#4BB543"};
  color: white;
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalImg = styled.img`
  height: 50px;
  width: 50px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ModalFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;
`;

export const SubmitButton = styled.button`
  color: var(--primary);
  background-color: white;
  border: none;
  width: 100%;
  font-size: 1rem;
  transition: font-size 0.2;
  cursor: pointer;
  &:hover {
    font-size: 18px;
  }
`;

export const CancelButton = styled.button`
  color: #ccc;
  background-color: white;
  border: none;
  width: 100%;
  font-size: 1rem;
  cursor: pointer;
  transition: font-size 0.2;
  &:hover {
    font-size: 18px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%1;
  justify-content: center;
`;

export const LogoutButton = styled.button`
  padding: 10px 12px;
  width: 100px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${(props) =>
    props.$type === "logout" ? "#ccc" : "var(--primary)"};
  color: ${(props) => (props.$type === "logout" ? "black" : "white")};
  transform: transform 0.2s, font-weight 0.3s;
  &:hover {
    transform: scale(1.02);
    font-weight: bold;
  }
`;
