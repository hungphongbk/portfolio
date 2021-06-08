import React from "react";
import Document, {Head, Html, Main, NextScript} from "next/document";
import {ServerStyleSheet as StyledServerStyleSheets} from "styled-components";
import {ServerStyleSheets as MuiServerStyleSheets} from "@material-ui/core";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const muiServerStyleSheets = new MuiServerStyleSheets();
    const styledServerStyleSheets = new StyledServerStyleSheets()

    const originalRenderPage = ctx.renderPage;

    try{
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => styledServerStyleSheets.collectStyles(muiServerStyleSheets.collect(
            <App {...props} />))
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [
          <React.Fragment key="styles">
            {initialProps.styles}
            {muiServerStyleSheets.getStyleElement()}
            {styledServerStyleSheets.getStyleElement()}
          </React.Fragment>,
        ],
      };
    } finally{
      styledServerStyleSheets.seal()
    }
  }

  render() {
    // noinspection HtmlRequiredTitleElement
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8"/>
          <meta name="theme-color" content="#000000"/>
          <link rel="shortcut icon" href="/img/favicon.png"/>
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/img/apple-icon.png"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Material+Icons"
          />
          <link href="https://fonts.googleapis.com/css2?family=Cabin+Sketch&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"/>
          <link
            href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap"
            rel="stylesheet"/>
          <link
            href="https://use.fontawesome.com/releases/v5.0.10/css/all.css"
            rel="stylesheet"
          />
        </Head>
        <body>
        <div id="page-transition"/>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    );
  }
}
