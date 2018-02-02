import firebase from 'firebase'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyDPwyA_-1kTFwsWEvonBpV3tboYXMxr6Dw",
    authDomain: "fb-counter-c27ff.firebaseapp.com",
    databaseURL: "https://fb-counter-c27ff.firebaseio.com",
    projectId: "fb-counter-c27ff",
    storageBucket: "fb-counter-c27ff.appspot.com",
    messagingSenderId: "919258337656"
  };

firebase.initializeApp(config);
const db = firebase.firestore();
export default db;