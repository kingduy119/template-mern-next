import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
          <meta name="google" content="notranslate" />

          {/* <!-- Latest compiled and minified CSS --> */}
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js" />
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" />

          {/* Icon */}
          {/* <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          /> */}
          {/* <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" /> */}
          <link rel="stylesheet" href="/dist/stylesheet.css" />

          {/* bootstrap icons */}
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
            integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
            crossorigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
