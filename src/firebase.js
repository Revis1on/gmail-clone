import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDyWZ13XD2uBjIjPTLYrH5lzO8OHnzL-Qs",
  authDomain: "clone-4451e.firebaseapp.com",
  projectId: "clone-4451e",
  storageBucket: "clone-4451e.appspot.com",
  messagingSenderId: "609383790804",
  appId: "1:609383790804:web:0abb89d69125d02e372341",
  measurementId: "G-3D77SK683L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
