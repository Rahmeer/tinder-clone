import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAYefnu1Y6RgtfHmjMgz248Snl3Y5BV9H8',
  authDomain: 'tinder-clone-aa898.firebaseapp.com',
  projectId: 'tinder-clone-aa898',
  storageBucket: 'tinder-clone-aa898.appspot.com',
  messagingSenderId: '790557441038',
  appId: '1:790557441038:web:da7605b28102535085d05f',
  measurementId: 'G-B5QPQZYQ5L',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
