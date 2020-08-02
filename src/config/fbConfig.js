import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAJd9j2LXHvKIkbM0ZhBiHw0xynUE_LJCQ",
  authDomain: "waon-kobo-web.firebaseapp.com",
  databaseURL: "https://waon-kobo-web.firebaseio.com",
  projectId: "waon-kobo-web",
  storageBucket: "waon-kobo-web.appspot.com",
  messagingSenderId: "273390233049",
  appId: "1:273390233049:web:9e56b8318c25f9386925c8",
  measurementId: "G-2W0KJD3YL5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
