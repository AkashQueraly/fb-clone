import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCp0lPreSH29SjysG76PUEwicQmeQA6Fz0",
  authDomain: "facebook-clone-1155.firebaseapp.com",
  projectId: "facebook-clone-1155",
  storageBucket: "facebook-clone-1155.appspot.com",
  messagingSenderId: "944816666257",
  appId: "1:944816666257:web:f77a59f79752e30ecfb130",
  measurementId: "G-5Y9RJ0K76W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
  