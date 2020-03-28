import firebase from 'firebase/app';
import 'firebase/analytics';
import { AppContext, AppProps } from 'next/app';
import Head from 'next/head';
import * as React from 'react';

import '../../scss/index.scss';

class MyApp extends React.Component<AppContext & AppProps> {
  public componentDidMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyAOfVFXN726ivRt_pGw4OKw4H6C-ejNQKE',
      appId: '1:617246166086:web:5e340858533dae253d4e47',
      authDomain: 'take-my-cup.firebaseapp.com',
      databaseURL: 'https://take-my-cup.firebaseio.com',
      measurementId: 'G-K6VJLCP04L',
      messagingSenderId: '617246166086',
      projectId: 'take-my-cup',
      storageBucket: 'take-my-cup.appspot.com',
    };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
  public render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Take my cup</title>
          <link
            href='https://fonts.googleapis.com/css?family=Roboto:400,700|Roboto+Slab&display=swap'
            rel='stylesheet'
          />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
