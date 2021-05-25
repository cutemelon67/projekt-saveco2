import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyAgZbcaAY1jB1FTbFAsckw1weNNtdjkN5Y',
  authDomain: 'saveco2-c7fb5.firebaseapp.com',
  projectId: 'saveco2-c7fb5',
  storageBucket: 'saveco2-c7fb5.appspot.com',
  messagingSenderId: '1071755863200',
  appId: '1:1071755863200:web:dc84e48326ad84f7f915c5',
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
