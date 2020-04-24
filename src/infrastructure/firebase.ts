import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';

const config = {
    appName: 'take-my-cup',
    apiKey: 'AIzaSyAOfVFXN726ivRt_pGw4OKw4H6C-ejNQKE',
    appId: '1:617246166086:web:5e340858533dae253d4e47',
    authDomain: 'take-my-cup.firebaseapp.com',
    databaseURL: 'https://take-my-cup.firebaseio.com',
    measurementId: 'G-K6VJLCP04L',
    messagingSenderId: '617246166086',
    projectId: 'take-my-cup',
    storageBucket: 'take-my-cup.appspot.com',
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export default firebase;
