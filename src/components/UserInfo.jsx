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
import Skeleton from "react-loading-skeleton";
import { capitalize } from "../utils";
export function UserInfo() {
  const { accessToken } = useSelector((state) => state.auth);
  const {
    data: user,
    isSuccess,
    isFetching,
  } = useGetProfileQuery({ token: accessToken });

  const checkImage = useCallback((image) => {
    if (image.endsWith("/null")) return false;
    return true;
  }, []);

  return (
    <UserInfoContainer>
      {isFetching ? (
        <>
          <Skeleton circle={true} />
        </>
      ) : (
        isSuccess && (
          <>
            <UserImage
              src={
                checkImage(user?.profile_image) ? user?.profile_image : avatar
              }
            />
            <TextContainer>
              <CustomText weight="base" size="medium">
                Selamat Datang,
              </CustomText>
              <CustomText weight="semibold" size="extraLarge">
                {capitalize(`${user.first_name} ${user.last_name}`)}
              </CustomText>
            </TextContainer>
          </>
        )
      )}
    </UserInfoContainer>
  );
}
