
import firebase from 'firebase/app';
import 'firebase/firestore';  // Import Firestore
import 'firebase/storage'; // Import Firebase Storage

const firebaseConfig = {
    apiKey: "AIzaSyAPKcXgBJLbmngYHfOymjkV-d3t1NmhRoU",
    authDomain: "portfolio-5e3eb.firebaseapp.com",
    projectId: "portfolio-5e3eb",
    storageBucket: "portfolio-5e3eb.appspot.com",
    messagingSenderId: "511561733367",
    appId: "1:511561733367:web:6de02fa9d4201c67e02ff2"
  };
  

firebase.initializeApp(firebaseConfig);
const Firebase = firebase
const firestore = firebase.firestore(); // Initialize Firestore
const storage = firebase.storage()
export { Firebase, firestore, storage };
