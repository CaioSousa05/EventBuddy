import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAQOCyf3VNUluSuNCiYNvUrtmYpZZB_-vg",
  authDomain: "db-513b1.firebaseapp.com",
  projectId: "db-513b1",
  storageBucket: "db-513b1.firebasestorage.app",
  messagingSenderId: "661380287222",
  appId: "1:661380287222:web:7c1ffb8db8ca0a380bbad7"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export const database = firebase.firestore()
export const auth = firebase.auth()