import {
  CustomText,
  TextContainer,
  UserImage,
  UserInfoContainer,
} from "./styled";
import avatar from "../assets/images/avatar.png";
import { useGetProfileQuery } from "../redux/reducers/profileQuery";
import { useSelector } from "react-redux";
import { useCallback } from "react";

export function UserInfo() {
  const { accessToken } = useSelector((state) => state.auth);
  const { data: user, isSuccess } = useGetProfileQuery({ token: accessToken });

  const checkImage = useCallback((image) => {
    if (image.endsWith("/null")) return false;
    return true;
  }, []);

  return (
    <UserInfoContainer>
      <UserImage
        src={
          isSuccess && checkImage(user?.profile_image)
            ? user?.profile_image
            : avatar
        }
      />
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
