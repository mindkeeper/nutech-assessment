import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { GlobalStyle, theme } from "./assets/styles";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./utils";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={false}
              closeOnClick={true}
              pauseOnHover={true}
              draggable={true}
              theme="light"
            />
            <RouterProvider router={router} />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}
