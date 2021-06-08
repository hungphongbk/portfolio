import React from "react";
import ReactDOM from "react-dom";
import {AppProps} from "next/app";
import Head from "next/head";
import Router from "next/router";

import PageChange from "../components/PageChange/PageChange";

import "styles/scss/nextjs-material-kit.scss?v=1.2.0";
import {ThemeProvider} from '@material-ui/core/styles';
import theme from "../styles/theme";
import {CssBaseline} from "@material-ui/core";
import createCache from '@emotion/cache';
import {CacheProvider} from '@emotion/react';
import {Provider} from "next-auth/client";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url}/>,
    document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

export const cache = createCache({key: 'css', prepend: true});

export default function MyApp(props: AppProps) {
  const {Component, pageProps} = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider session={pageProps.session}>
      <CacheProvider value={cache}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Ilya Truong | UI/UX Designer, Frontend Developer</title>
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline/>
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
}
