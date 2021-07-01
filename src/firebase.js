import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS-42nxyJXSMwB41mmM6F32vdksbl77iY",
  authDomain: "yemi-bold.firebaseapp.com",
  projectId: "yemi-bold",
  storageBucket: "yemi-bold.appspot.com",
  messagingSenderId: "1014301232438",
  appId: "1:1014301232438:web:a3b0993d2801a07ce87797",
  measurementId: "G-1V3LQ6V2FJ"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  // const auth = firebase.auth();
  // const provider = new firebase.auth.GoogleAuthProvider();

  // export { auth, provider };
  export default db;
