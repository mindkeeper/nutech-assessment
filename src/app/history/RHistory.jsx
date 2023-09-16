import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetState } from "../../redux/reducers/historySlice";
import { historyAction } from "../../redux/actions";

export default function RHistory() {
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state) => state.auth);
  const {
    records,
    hasNextData,
    isLoading,
    isSuccess,
    offset: dataOffset,
  } = useSelector((state) => state.history);
  console.log(
    records,
    hasNextData,
    "loading: ",
    isLoading,
    " offset:",
    dataOffset
  );
  const [offset, setOffset] = useState(0);
  const handleClick = useCallback((e) => {
    e.preventDefault();
    setOffset((curr) => curr + 5);
  }, []);

  useEffect(() => {
    dispatch(historyAction({ token: accessToken, offset }));
  }, [dispatch, offset, accessToken]);

  useEffect(() => {
    return () => {
      dispatch(resetState());
    };
  }, [dispatch]);

  return (
    <div>
      {isSuccess &&
        records.map((group) =>
          group.map((record, idx) => <div key={idx}>{record.description}</div>)
        )}
      <button onClick={handleClick}>show more</button>
    </div>
  );
}
