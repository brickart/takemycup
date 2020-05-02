import * as React from 'react';
import { Header, Footer } from '../components';
// import firebase from '../infrastructure/firebase';

export default () => {
  // const db = firebase.firestore();
  // const articlesRef = db.collection('articles');

  return (
    <div className='wrapper'>
      <Header />
      <main className='main'>
        <div className='safe-area col'>
          <div className='top-authors'/>
          <div className='main__content-with-col'>
            <div className='main__col-left col'>
              <div className='banner'/>
              <div className='feed'/>
            </div>
            <div className='main__col-right col'>
              <div className='top-answer'/>
              <div className='top-question'/>
            </div>
          </div>
          <div className='banner'/>
        </div>
      </main>
      <Footer />
    </div>
  );
};
