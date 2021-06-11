import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDZ2ZagnKzVKqIlFLUv64-MJ2xLCqh6I6A",
  authDomain: "netflix-1a23a.firebaseapp.com",
  projectId: "netflix-1a23a",
  storageBucket: "netflix-1a23a.appspot.com",
  messagingSenderId: "467694810471",
  appId: "1:467694810471:web:762080c349c504a2e1ebc2",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { auth };
export default db;
