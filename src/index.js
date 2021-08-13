import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

import Themes from "./themes";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { LayoutProvider } from "./context/LayoutContext";
import { UserProvider } from "./context/UserContext";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
ReactDOM.render(
  <LayoutProvider>
    <UserProvider>
      <ThemeProvider theme={Themes.default}>
        <QueryClientProvider client={queryClient}>
          <CssBaseline />
          <App />
        </QueryClientProvider>
      </ThemeProvider>
    </UserProvider>
  </LayoutProvider>,
  document.getElementById("root"),
);
serviceWorker.unregister();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA