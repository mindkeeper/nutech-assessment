import { useCallback, useRef } from "react";
import {
  AvatarContainer,
  AvatarImage,
  AvatarWrapper,
  EditIcon,
  Input,
} from "./styled";
import defaultImage from "../../../assets/images/avatar.png";
import { HiPencil as Pencil } from "react-icons/hi2";
import { CustomText } from "../../../components/styled";
import { useHandleImageChange } from "../hooks";

export function Avatar({ image, first_name, last_name, editable }) {
  const { selectedImage, handleImageChange } = useHandleImageChange(image);

  const refTarget = useRef(null);

  const checkImage = useCallback((image) => {
    if (image.endsWith("/null")) return false;
    return true;
  }, []);

  return (
    <AvatarContainer>
      <AvatarWrapper>
        <AvatarImage
          src={checkImage(selectedImage) ? selectedImage : defaultImage}
          alt="profile image"
        />
        <EditIcon
          $editable={editable}
          onClick={(e) => {
            e.preventDefault();
            refTarget.current.click();
          }}
        >
          <Pencil />
        </EditIcon>
        <Input
          type="file"
          accept="image/*"
          ref={refTarget}
          onChange={handleImageChange}
          disabled={!editable}
          hidden
        />
      </AvatarWrapper>
      <CustomText size="large">{`${first_name} ${last_name}`}</CustomText>
    </AvatarContainer>
  );
}
