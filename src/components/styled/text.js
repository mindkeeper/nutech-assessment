import styled from "styled-components";

export const CustomText = styled.p`
  user-select: ${(props) => (props.$select ? "auto" : "none")};

  font-size: ${(props) => {
    switch (props.size || "small") {
      case "extraSmall":
        return "12px";
      case "small":
        return "1rem";
      case "medium":
        return "20px";
      case "large":
        return "24px";
      case "extraLarge":
        return "36px";
      default:
        return "16px";
    }
  }};

  font-weight: ${(props) => {
    switch (props.weight || "base") {
      case "base":
        return "normal";
      case "bold":
        return "700";
      case "thin":
        return "300";
      case "semibold":
        return "500"
      default:
        return "normal";
    }
  }};
  cursor: ${(props) => props.cursor || "default"};
`;

CustomText.defaultProps = {
  $select: true,
};
