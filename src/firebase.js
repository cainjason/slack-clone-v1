import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB2R5MS-hrkVGicCksYPMqyj4oW2lxcgK0",
    authDomain: "slack-clone-v1-b2b6c.firebaseapp.com",
    projectId: "slack-clone-v1-b2b6c",
    storageBucket: "slack-clone-v1-b2b6c.appspot.com",
    messagingSenderId: "420924503204",
    appId: "1:420924503204:web:69a6d7238c1e9be169e231",
    measurementId: "G-CHV89MCKQ9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, db };