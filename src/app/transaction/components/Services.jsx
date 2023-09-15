import { CardService } from ".";
import { ServiceContainer, ServiceWrapper } from "./styled";

export function Services({ isSuccess, services, handleParam }) {
  return (
    <ServiceContainer>
      <ServiceWrapper>
        {isSuccess &&
          services.map((service) => (
            <CardService
              setParam={handleParam}
              service={service}
              key={service.service_code}
            />
          ))}
      </ServiceWrapper>
    </ServiceContainer>
  );
}
