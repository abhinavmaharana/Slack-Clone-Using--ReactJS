import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgpW6mWzukHpTQ75r5JFbdtEfIgpuvMG0",
  authDomain: "slack-clone-99b68.firebaseapp.com",
  databaseURL: "https://slack-clone-99b68.firebaseio.com",
  projectId: "slack-clone-99b68",
  storageBucket: "slack-clone-99b68.appspot.com",
  messagingSenderId: "388963002343",
  appId: "1:388963002343:web:9f63daf0cd5b933479ff42",
  measurementId: "G-M577SQK7QM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
