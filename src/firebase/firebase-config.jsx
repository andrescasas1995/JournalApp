import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBM8bACib0NUS89mZVI5yPk1WLOOu5v6H4",
    authDomain: "react-app-cursos-31180.firebaseapp.com",
    databaseURL: "https://react-app-cursos-31180.firebaseio.com",
    projectId: "react-app-cursos-31180",
    storageBucket: "react-app-cursos-31180.appspot.com",
    messagingSenderId: "1036827059786",
    appId: "1:1036827059786:web:8fc1dfd6e842fbb19768b3"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAutProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAutProvider,
    firebase
}