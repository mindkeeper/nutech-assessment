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

import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useUpdateProfileMutation } from "../../../redux/reducers/profileQuery";
import { LogoutModal } from "../../../components/modals";
import { ConfirmModal } from "./Modal.Form";
import { toast } from "react-toastify";

export function Form({ user, editable, toggleEditable }) {
  const [isModalOpen, setIsModalOpen] = useState({
    logout: false,
    confirm: false,
  });
  const [submittable, setSubmittable] = useState(false);
  const [updateProfile, { isSuccess, isError, error }] =
    useUpdateProfileMutation();
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

  const toggleModal = useCallback((e, modalName) => {
    e.preventDefault();
    setIsModalOpen((prev) => ({ ...prev, [modalName]: !prev[modalName] }));
  }, []);

  const checkForm = useCallback((body) => {
    if (!body.first_name || !body.last_name) return setSubmittable(false);
    return setSubmittable(true);
  }, []);

  const submitHandler = useCallback(
    (e) => {
      e.preventDefault();
      const requestBody = {
        data: body,
        token: accessToken,
      };
      updateProfile(requestBody);
      toggleEditable(e);
      toggleModal(e, "confirm");
    },
    [updateProfile, toggleEditable, body, accessToken, toggleModal]
  );

  useEffect(() => {
    checkForm(body);
  }, [body, checkForm]);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Profile berhasil diubah");
      return;
    }
    if (isError) {
      toast.error(error.message);
    }
  }, [isError, isSuccess, error?.message]);

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
                toggleModal(e, "confirm");
              }}
              disabled={!submittable}
            >
              Simpan
            </Button>
            <EditButton onClick={toggleEditable}>Batalkan</EditButton>
          </>
        )}
        {!editable && (
          <>
            <EditButton onClick={toggleEditable}>Edit Profile</EditButton>
            <Button onClick={(e) => toggleModal(e, "logout")}>Log Out</Button>
          </>
        )}
        {isModalOpen.logout && <LogoutModal toggleModal={toggleModal} />}
        {isModalOpen.confirm && (
          <ConfirmModal
            toggleModal={toggleModal}
            submitHandler={submitHandler}
          />
        )}
      </FormWrapper>
    </FormContainer>
  );
}
