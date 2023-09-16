import { axiosInstance } from "./axios";

export const historyRequest = ({ offset, token }) => {
  return axiosInstance.get("/transaction/history", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      limit: 5,
      offset,
    },
  });
};
