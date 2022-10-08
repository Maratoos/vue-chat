import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDLT3jvuWvZNpJz0KLW2zHp7VJpkG-vm84",
  authDomain: "vue-chat-b4e27.firebaseapp.com",
  projectId: "vue-chat-b4e27",
  storageBucket: "vue-chat-b4e27.appspot.com",
  messagingSenderId: "480154889168",
  appId: "1:480154889168:web:44c95d6817348b636ea7d5"
};

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const firestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { firestore, timestamp, auth }