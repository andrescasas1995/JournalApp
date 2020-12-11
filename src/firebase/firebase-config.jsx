import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASEURL,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
};

// const firebaseConfigTesting = {
//     apiKey: "AIzaSyB_iKIhpuzf-aRJS2zQyMiyeGOuDbKsq_g",
//     authDomain: "react-journal-app-test.firebaseapp.com",
//     databaseURL: "https://react-journal-app-test.firebaseio.com",
//     projectId: "react-journal-app-test",
//     storageBucket: "react-journal-app-test.appspot.com",
//     messagingSenderId: "872712789406",
//     appId: "1:872712789406:web:78ce173e399a0345db4a8f"
//   };


// if( process.env.NODE_ENV === 'test' ) {
//     // testing
//     firebase.initializeApp(firebaseConfigTesting);
// } else {
//     //dev/prod
//     firebase.initializeApp(firebaseConfig);
// }

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}