import { useSelector } from "react-redux";
import {
  BannerContainer,
  BannerImage,
  BannerSlider,
  BannerWrapper,
} from "./styled";
import { CustomText } from "../../../components/styled";
import { useGetBannerQuery } from "../../../redux/reducers/bannerQuery";

export function Banner() {
  const { accessToken } = useSelector((state) => state.auth);
  const { data: banners, isSuccess } = useGetBannerQuery({
    token: accessToken,
  });
  return (
    <BannerContainer>
      <BannerWrapper>
        <CustomText weight="bold">Temukan Promo Menarik</CustomText>
        <BannerSlider>
          {isSuccess &&
            banners.map((banner, idx) => (
              <div key={idx}>
                <BannerImage
                  src={banner.banner_image}
                  alt={banner.banner_name}
                />
              </div>
            ))}
        </BannerSlider>
      </BannerWrapper>
    </BannerContainer>
  );
}
