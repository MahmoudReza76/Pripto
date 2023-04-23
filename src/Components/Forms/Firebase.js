import { useEffect, useState } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKLFlFdblXVF3tBHNl0QPfDmQOQ23bS-U",
  authDomain: "pripto.firebaseapp.com",
  projectId: "pripto",
  storageBucket: "pripto.appspot.com",
  messagingSenderId: "724147616653",
  appId: "1:724147616653:web:f9d12e5b0466e1e7511bc4",
  measurementId: "G-8L8HP16959",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth();

export function sign(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
export function log(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
}
export default firebase;
