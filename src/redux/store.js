import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import { authQuery } from "./reducers/authQuery";
import { balanceQuery } from "./reducers/balanceQuery";
import { profileQuery } from "./reducers/profileQuery";
import { topUpQuery } from "./reducers/topUpQuery";
import { transactionQuery } from "./reducers/transactionQuery";

const secretKey = import.meta.env.VITE_SECRET_KEY;

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  transforms: [
    encryptTransform({
      secretKey,
      onError: function (error) {
        console.log(error);
      },
    }),
  ],
};
const reducer = combineReducers({
  [authQuery.reducerPath]: authQuery.reducer,
  [balanceQuery.reducerPath]: balanceQuery.reducer,
  [profileQuery.reducerPath]: profileQuery.reducer,
  [topUpQuery.reducerPath]: topUpQuery.reducer,
  [transactionQuery.reducerPath]: transactionQuery.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(authQuery.middleware)
      .concat(balanceQuery.middleware)
      .concat(profileQuery.middleware)
      .concat(topUpQuery.middleware)
      .concat(transactionQuery.middleware),
});

export const persistor = persistStore(store);
