import {
  EditButton,
  FormContainer,
  FormWrapper,
  Input,
  InputContainer,
  Label,
  LeftIcons,
} from "./styled";
import {
  MdOutlineAlternateEmail as Email,
  MdOutlinePerson2 as Person,
} from "react-icons/md";
import { Button } from "../../../components/styled";

import { useCallback, useState } from "react";
import { useSelector } from "react-redux";

import { useUpdateProfileMutation } from "../../../redux/reducers/profileQuery";
import { LogoutModal } from "../../../components/modals";

export function Form({ user, editable, toggleEditable }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateProfile] = useUpdateProfileMutation();
  const { accessToken } = useSelector((state) => state.auth);
  const [body, setBody] = useState({
    first_name: user?.first_name,
    last_name: user?.last_name,
  });

  const changeHandler = useCallback(
    (e) => {
      setBody({ ...body, [e.target.name]: e.target.value });
    },
    [body]
  );

  const submitHandler = useCallback(
    (e, body, token) => {
      e.preventDefault();
      const requestBody = {
        data: body,
        token,
      };
      updateProfile(requestBody);
      toggleEditable(e);
    },
    [updateProfile, toggleEditable]
  );

  const toggleModal = useCallback((e) => {
    e.preventDefault();
    setIsModalOpen((prev) => !prev);
  }, []);

  return (
    <FormContainer>
      <FormWrapper>
        <InputContainer>
          <Label>Email</Label>
          <LeftIcons>
            <Email />
          </LeftIcons>
          <Input
            name="email"
            type="email"
            disabled
            defaultValue={user?.email}
          />
        </InputContainer>
        <InputContainer>
          <Label>Nama Depan</Label>
          <LeftIcons>
            <Person />
          </LeftIcons>
          <Input
            name="first_name"
            type="text"
            defaultValue={user?.first_name}
            onChange={changeHandler}
            disabled={!editable}
          />
        </InputContainer>
        <InputContainer>
          <Label>Nama belakang</Label>
          <LeftIcons>
            <Person />
          </LeftIcons>
          <Input
            name="last_name"
            type="text"
            onChange={changeHandler}
            defaultValue={user?.last_name}
            disabled={!editable}
          />
        </InputContainer>
        {editable && (
          <>
            <Button
              onClick={(e) => {
                submitHandler(e, body, accessToken);
              }}
            >
              Simpan
            </Button>
            <EditButton onClick={toggleEditable}>Batalkan</EditButton>
          </>
        )}
        {!editable && (
          <>
            <EditButton onClick={toggleEditable}>Edit Profile</EditButton>
            <Button onClick={toggleModal}>Log Out</Button>
          </>
        )}
      </FormWrapper>
      {isModalOpen && <LogoutModal toggleModal={toggleModal} />}
    </FormContainer>
  );
}
