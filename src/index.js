import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBnC0AkyjSF0kNIZ6KqrOTg3DsuE5KmutA",
    authDomain: "cart-200ef.firebaseapp.com",
    projectId: "cart-200ef",
    storageBucket: "cart-200ef.appspot.com",
    messagingSenderId: "645380481757",
    appId: "1:645380481757:web:5acdf54b525afa1002b134"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
