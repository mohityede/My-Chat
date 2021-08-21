import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCggQkLPLqP1xl1JFgpqS-ys8lMBikMUSU",
    authDomain: "mychat-cbef4.firebaseapp.com",
    projectId: "mychat-cbef4",
    storageBucket: "mychat-cbef4.appspot.com",
    messagingSenderId: "729392289484",
    appId: "1:729392289484:web:78dedcdd64e900715dd469"
}).auth();