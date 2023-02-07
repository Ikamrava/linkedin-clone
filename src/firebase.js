import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAer31aI1SMl70QJ7tFjtNvs5_9f-0o3Mc",
  authDomain: "linkedin-clone-81ed9.firebaseapp.com",
  projectId: "linkedin-clone-81ed9",
  storageBucket: "linkedin-clone-81ed9.appspot.com",
  messagingSenderId: "110143124569",
  appId: "1:110143124569:web:cffea25f842c9d57666d48",
};

const app = initializeApp(firebaseConfig);
const storage = getFirestore(app);
const auth = getAuth(app);

export { storage, auth };
