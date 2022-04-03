import type { AppProps } from "next/app";
import { Fragment } from "react";
import { Provider } from "react-redux";
import AppBar from "../components/AppBar";

import store from "../store/store";
import "../styles/globals.css";
import "../styles/app-bar.css";
import "../styles/calculator-home-screen.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Fragment>
        <AppBar />
        <div className="default-margin">
          <Component {...pageProps} />
        </div>
      </Fragment>
    </Provider>
  );
}

export default MyApp;
