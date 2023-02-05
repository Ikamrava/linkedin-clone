import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAer31aI1SMl70QJ7tFjtNvs5_9f-0o3Mc",
  authDomain: "linkedin-clone-81ed9.firebaseapp.com",
  projectId: "linkedin-clone-81ed9",
  storageBucket: "linkedin-clone-81ed9.appspot.com",
  messagingSenderId: "110143124569",
  appId: "1:110143124569:web:cffea25f842c9d57666d48",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
