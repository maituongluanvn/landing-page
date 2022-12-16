import '@styles/globals.css';
import '@styles/scss/nextjs-material-kit.scss?v=1.2.0';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>NextJS Material Kit by Creative Tim</title>
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}
