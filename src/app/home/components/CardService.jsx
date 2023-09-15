import { useNavigate } from "react-router-dom";
import { ServiceCard, ServiceImage } from "./styled";
import { CustomText } from "../../../components/styled";

export function CardService({ service }) {
  const navigate = useNavigate();
  return (
    <ServiceCard
      onClick={() => {
        navigate({
          pathname: "/transaction",
          search: `?type=${service.service_code}`,
        });
      }}
    >
      <ServiceImage src={service.service_icon} />
      <CustomText
        size="extraSmall"
        cursor="pointer"
        style={{ textAlign: "center" }}
      >
        {service.service_name}
      </CustomText>
    </ServiceCard>
  );
}
