import {
  CustomText,
  TextContainer,
  UserImage,
  UserInfoContainer,
} from "./styled";
import avatar from "../assets/images/avatar.png";
import { useGetProfileQuery } from "../redux/reducers/profileQuery";
import { useSelector } from "react-redux";

export function UserInfo() {
  const { accessToken } = useSelector((state) => state.auth);
  const { data: user, isSuccess } = useGetProfileQuery({ token: accessToken });
  return (
    <UserInfoContainer>
      <UserImage src={isSuccess && user?.image ? user?.image : avatar} />
      <TextContainer>
        <CustomText weight="base" size="medium">
          Selamat Datang,
        </CustomText>
        {isSuccess && (
          <CustomText weight="bold" size="large">
            {`${user?.first_name} ${user?.last_name}`}
          </CustomText>
        )}
      </TextContainer>
    </UserInfoContainer>
  );
}
