import { Header, Footer } from '../components';
import firebase from '../infrastructure/firebase';

export default () => {
  const db = firebase.firestore();
  const articlesRef = db.collection('articles');

  articlesRef.get().then((doc) => {
    if (doc.docs && doc.docs.length) {
      doc.docs.map((d) => console.log("Document data:", d.data()));
    //   console.log("Document data:", doc.data());
    // } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }).catch(function (error) {
    console.log("Error getting document:", error);
  });

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
