import { CustomText } from "../../components/styled";
import {
  HistoryContainer,
  HistoryList,
  HistoryWrapper,
  ShowMore,
  TextWrapper,
} from "./components/styled";
import { Card } from "./components";
import { useHistory } from "./hooks";
import { useEffect } from "react";
import { useQueryClient } from "react-query";

export function History() {
  const { history, isSuccess, hasNextPage, fetchNextPage } = useHistory();
  const queryClient = useQueryClient();
  useEffect(() => {
    return () => {
      queryClient.removeQueries("history");
    };
  }, [queryClient]);

  return (
    <HistoryContainer>
      <HistoryWrapper>
        <TextWrapper>
          <CustomText weight="bold">Semua Transaksi</CustomText>
        </TextWrapper>
        <HistoryList>
          {isSuccess &&
            history.pages.map((group) =>
              group.data.data.records.map((record) => {
                return <Card record={record} key={record.invoice_number} />;
              })
            )}
          {hasNextPage && (
            <ShowMore
              onClick={(e) => {
                e.preventDefault();
                fetchNextPage();
              }}
            >
              show more
            </ShowMore>
          )}
        </HistoryList>
      </HistoryWrapper>
    </HistoryContainer>
  );
}
