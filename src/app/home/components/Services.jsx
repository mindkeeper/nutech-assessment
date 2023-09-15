import { ServiceContainer, ServiceWrapper } from "./styled";
import { useGetServicesQuery } from "../../../redux/reducers/serviceQuery";
import { CardService } from ".";
import { useSelector } from "react-redux";
export function Services() {
  const { accessToken } = useSelector((state) => state.auth);
  const { data: services, isSuccess } = useGetServicesQuery({
    token: accessToken,
  });
  return (
    <ServiceContainer>
      <ServiceWrapper>
        {isSuccess &&
          services.map((service) => (
            <CardService service={service} key={service.service_code} />
          ))}
      </ServiceWrapper>
    </ServiceContainer>
  );
}
