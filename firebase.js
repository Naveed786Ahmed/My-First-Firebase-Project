import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signOut, sendPasswordResetEmail  } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDqeJ1qLsCD3yhzAWaTYo5zZaRsYTgn5_4",
    authDomain: "my-first-firebase-projec-dc505.firebaseapp.com",
    projectId: "my-first-firebase-projec-dc505",
    storageBucket: "my-first-firebase-projec-dc505.appspot.com",
    messagingSenderId: "966135941411",
    appId: "1:966135941411:web:da9b3d32ea8f8645cba496"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export{
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    sendEmailVerification,
    signOut,
    sendPasswordResetEmail 
}