import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useUpdateImageMutation } from "../../../redux/reducers/profileQuery";
import { toast } from "react-toastify";

export const useHandleImageChange = (image) => {
  const [selectedImage, setSelectedImage] = useState(image);
  const { accessToken } = useSelector((state) => state.auth);
  const [updateImage] = useUpdateImageMutation();

  const handleImageChange = useCallback(
    (e) => {
      const file = e.target.files[0];
      if (file) {
        if (file.size > 100 * 1024) {
          return toast.error("FIle lebih dari 100kb");
        }
        const reader = new FileReader();
        reader.onload = (e) => {
          setSelectedImage(e.target.result);
        };
        reader.readAsDataURL(file);
        const formData = new FormData();

        formData.append("file", file);
        updateImage({ data: formData, token: accessToken, formData: true });
      }
    },
    [updateImage, accessToken]
  );

  return { selectedImage, setSelectedImage, handleImageChange };
};
