import axios from "axios";

const host = import.meta.env.VITE_BACKEND_URL;

export const axiosInstance = axios.create({ baseURL: host });

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
    } catch (err) {
      return {
        error: {
          status: err.response.status,
          message: err.response?.data?.message || err.message,
        },
      };
    }
  };
