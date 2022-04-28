import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA_fec1Rt8eo99ArgMZ1ovzfU5MtiNmqs4",
  authDomain: "coder-react31145.firebaseapp.com",
  projectId: "coder-react31145",
  storageBucket: "coder-react31145.appspot.com",
  messagingSenderId: "803266962880",
  appId: "1:803266962880:web:2b404b1fd9827d2f329425"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app) 