import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAnWaFiVJPz8rWY8sor4Hdl43n1OBBZbcc",
    authDomain: "fb-project-zt.firebaseapp.com",
    databaseURL: "https://fb-project-zt.firebaseio.com",
    projectId: "fb-project-zt",
    storageBucket: "fb-project-zt.appspot.com",
    messagingSenderId: "496770821625",
    appId: "1:496770821625:web:f2b7c1e191725444"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();


export default firebase;