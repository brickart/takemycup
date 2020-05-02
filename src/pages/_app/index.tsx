import * as React from 'react';
import { AppContext, AppProps } from 'next/app';
import Head from 'next/head';

import firebase from '../../infrastructure/firebase';

import '../../scss/index.scss';

class MyApp extends React.Component<AppContext & AppProps> {
  componentDidMount() {
    firebase.analytics();
  }
  public render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Take my cup</title>
          <link
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,700|Roboto+Slab&display=swap'
            rel='stylesheet'
          />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
