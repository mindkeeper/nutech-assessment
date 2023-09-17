import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    infiniteScroll: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <BannerContainer>
      <BannerWrapper>
        <CustomText weight="bold">Temukan Promo Menarik</CustomText>
        <BannerSlider>
          <Slider {...settings}>
            {isSuccess &&
              banners.map((banner, idx) => (
                <div key={idx}>
                  <BannerImage
                    src={banner.banner_image}
                    alt={banner.banner_name}
                  />
                </div>
              ))}
          </Slider>
        </BannerSlider>
      </BannerWrapper>
    </BannerContainer>
  );
}
