import { ServiceCard, ServiceImage } from "./styled";
import { CustomText } from "../../../components/styled";

export function CardService({ service, setParam }) {
  return (
    <ServiceCard
      onClick={(e) => {
        setParam(e, service.service_code);
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
