import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjnkxF8HdQXYiPx0pbUWWEPGqt41O910w",
  authDomain: "blog-project-c788a.firebaseapp.com",
  projectId: "blog-project-c788a",
  storageBucket: "blog-project-c788a.appspot.com",
  messagingSenderId: "984167224500",
  appId: "1:984167224500:web:d342063121371fada6f3e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);