import {
  ButtonWrapper,
  CustomLink,
  Form,
  InputContainer,
  LeftIcons,
  LinkContainer,
  LinkText,
  PasswordIcon,
  Input,
} from "./components/styled";
import { Layout } from "./components";
import { Button } from "../../components/styled";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { CiLock } from "react-icons/ci";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { useCallback, useEffect, useState } from "react";
import { useToggle } from "./hooks";
import { useLoginMutation } from "../../redux/reducers/authQuery";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function Login() {
  const [login, { isSuccess, isError, error, data, isLoading }] =
    useLoginMutation();
  const [submittable, setSubmittable] = useState(false);
  const [loginBody, setLoginBody] = useState({});
  const [visible, toggleVisibility] = useToggle();

  const navigate = useNavigate();

  const checkForm = useCallback((body) => {
    if (!body.email || !body.password) return setSubmittable(false);
    return setSubmittable(true);
  }, []);

  const changeHandler = useCallback(
    (e) => {
      setLoginBody({ ...loginBody, [e.target.name]: e.target.value });
    },
    [loginBody]
  );

  const submitHandler = useCallback(
    (e, loginBody) => {
      e.preventDefault();
      const data = {
        email: loginBody.email,
        password: loginBody.password,
      };
      login(data);
    },
    [login]
  );

  useEffect(() => {
    checkForm(loginBody);
  }, [checkForm, loginBody]);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Login Berhasil");
      navigate("/");
    } else if (isError) {
      toast.error(error.message);
    }
  }, [isSuccess, isError, data, error, navigate]);

  return (
    <Layout>
      <Form
        onSubmit={(e) => {
          submitHandler(e, loginBody);
        }}
      >
        <InputContainer>
          <LeftIcons>
            <MdOutlineAlternateEmail />
          </LeftIcons>
          <Input
            type="email"
            name="email"
            placeholder="masukkan email anda"
            onChange={changeHandler}
          />
        </InputContainer>
        <InputContainer>
          <LeftIcons>
            <CiLock />
          </LeftIcons>
          <Input
            type={visible ? "text" : "password"}
            name="password"
            placeholder="masukkan password anda"
            onChange={changeHandler}
          />
          <PasswordIcon onClick={toggleVisibility}>
            {visible ? <BsEyeSlash /> : <BsEye />}
          </PasswordIcon>
        </InputContainer>
        <ButtonWrapper>
          <Button disabled={!submittable || isLoading}>Masuk</Button>
        </ButtonWrapper>
        <LinkContainer>
          <LinkText>belum punya akun? registrasi di</LinkText>
          <CustomLink to={"/registration"}>sini</CustomLink>
        </LinkContainer>
      </Form>
    </Layout>
  );
}
