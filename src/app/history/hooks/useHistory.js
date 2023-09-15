import { useInfiniteQuery } from "react-query";
import { useSelector } from "react-redux";
import { axiosInstance } from "../../../api";

const historyRequest = ({ token, offset = 0 }) => {
  return axiosInstance.get("/transaction/history", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: { offset, limit: 5 },
  });
};

export const useHistory = () => {
  const { accessToken } = useSelector((state) => state.auth);
  const {
    data,
    fetchNextPage,
    isSuccess,
    error,
    isError,
    isFetching,
    isFetchingNextPage,
    isLoading,
    hasNextPage,
  } = useInfiniteQuery(
    "history",
    ({ pageParam = 0 }) => {
      return historyRequest({ token: accessToken, offset: pageParam });
    },
    {
      getNextPageParam: (lastPage) => {
        const { data } = lastPage;
        const records = data?.data?.records;
        const currentOffset = parseInt(data?.data?.offset);
        const hasNextPage = records.length === 5;
        return hasNextPage ? currentOffset + 5 : null;
      },
    }
  );

  return {
    history: data,
    error,
    isSuccess,
    isError,
    isFetching,
    isFetchingNextPage,
    isLoading,
    fetchNextPage,
    hasNextPage,
  };
};
