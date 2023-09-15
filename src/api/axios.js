import axios from "axios";

const host = import.meta.env.VITE_BACKEND_URL;

export const axiosInstance = axios.create({ baseURL: `${host}/api` });

export const axiosBaseQuery =
  () =>
  async ({ url, method, token, data, formData, params }) => {
    try {
      const res = await axiosInstance({
        url,
        method,
        data,
        params,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": formData ? "mulipart/form-data" : "application/json",
        },
      });
      return res.data;
    } catch (error) {
      return {
        error: {
          status: error?.response.status,
          message: error?.respose?.data?.message || error?.message,
        },
      };
    }
  };
