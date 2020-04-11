import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCac9U7dnuQlf-wAGMsCU8AjJmp7tiNm9I",
    authDomain: "quick-react-874e6.firebaseapp.com",
    databaseURL: "https://quick-react-874e6.firebaseio.com",
    projectId: "quick-react-874e6",
    storageBucket: "quick-react-874e6.appspot.com",
    messagingSenderId: "776385357596",
    appId: "1:776385357596:web:6c9a4e953c86f154a57cd9"
  };

firebase.initializeApp(firebaseConfig);


export default firebase;