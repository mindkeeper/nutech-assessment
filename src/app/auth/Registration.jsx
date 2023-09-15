import { useCallback, useState, useEffect } from "react";

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
import { MdOutlineAlternateEmail, MdPerson2 } from "react-icons/md";
import { toast } from "react-toastify";
import { useRegisterMutation } from "../../redux/reducers/authQuery";
import { useNavigate } from "react-router-dom";

export function Registration() {
  const [register, { isSuccess, isError, error }] = useRegisterMutation();
  const [isSubmittable, setIssubmittable] = useState(false);
  const [body, setBody] = useState({});
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
  });
  const navigate = useNavigate();

  const togglePasswordVisibility = useCallback((field) => {
    setPasswordVisibility((prev) => ({ ...prev, [field]: !prev[field] }));
  }, []);

  const changeHandler = useCallback(
    (e) => {
      setBody({ ...body, [e.target.name]: e.target.value });
    },
    [body, setBody]
  );

  const checkForm = useCallback((body) => {
    if (
      !body.email ||
      !body.first_name ||
      !body.last_name ||
      !body.password ||
      !body.confirmPassword
    ) {
      setIssubmittable(false);
      return;
    }
    setIssubmittable(true);
  }, []);

  useEffect(() => {
    checkForm(body);
  }, [body, checkForm]);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Registrasi Berhasil");
      navigate("/login");
    } else if (isError) {
      console.log(error);
      toast.error(error.message);
    }
  }, [isSuccess, isError, error, navigate]);

  const submitHandler = useCallback(
    async (e) => {
      e.preventDefault();
      if (
        (body?.password && body.password.length < 8) ||
        (body.confirmPassword && body?.confirmPassword?.length < 8)
      )
        return toast.error("min password : 8");
      if (body.password !== body.confirmPassword) {
        toast.error("konfirmasi password tidak sesuai");
        return;
      }

      const registerBody = {
        email: body.email,
        password: body.password,
        first_name: body.first_name,
        last_name: body.last_name,
      };
      await register({ ...registerBody });
    },
    [body, register]
  );

  return (
    <Layout>
      <Form onSubmit={submitHandler}>
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
            <MdPerson2 />
          </LeftIcons>
          <Input
            type="text"
            name="first_name"
            placeholder="masukkan nama depan"
            onChange={changeHandler}
          />
        </InputContainer>
        <InputContainer>
          <LeftIcons>
            <MdPerson2 />
          </LeftIcons>
          <Input
            type="text"
            name="last_name"
            placeholder="masukkan nama belakang"
            onChange={changeHandler}
          />
        </InputContainer>
        <InputContainer>
          <LeftIcons>
            <CiLock />
          </LeftIcons>
          <Input
            type={passwordVisibility.password ? "text" : "password"}
            placeholder="buat password"
            name="password"
            onChange={changeHandler}
          />
          <PasswordIcon
            onClick={() => {
              togglePasswordVisibility("password");
            }}
          >
            {passwordVisibility.password ? <BsEyeSlash /> : <BsEye />}
          </PasswordIcon>
        </InputContainer>

        <InputContainer>
          <LeftIcons>
            <CiLock />
          </LeftIcons>
          <Input
            type={passwordVisibility.confirmPassword ? "text" : "password"}
            placeholder="konfirmasi password"
            name="confirmPassword"
            onChange={changeHandler}
          />
          <PasswordIcon
            onClick={() => {
              togglePasswordVisibility("confirmPassword");
            }}
          >
            {passwordVisibility.confirmPassword ? <BsEyeSlash /> : <BsEye />}
          </PasswordIcon>
        </InputContainer>
        <ButtonWrapper>
          <Button disabled={!isSubmittable}>Registrasi</Button>
        </ButtonWrapper>
        <LinkContainer>
          <LinkText>sudah punya akun? login di</LinkText>
          <CustomLink to={"/login"}>sini</CustomLink>
        </LinkContainer>
      </Form>
    </Layout>
  );
}
