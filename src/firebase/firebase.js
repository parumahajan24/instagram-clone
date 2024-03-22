import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/firebase-auth';
import { getFirestore } from 'firebase/firebase-storage';
import { getStorage } from "firebase/firebase-storage";

const firebaseConfig = {
    apiKey: "AIzaSyC_Wb2ESbgC7qkubUUruNpq9cTfOMUZESw",
    authDomain: "instagram-clone-pm-20e1b.firebaseapp.com",
    projectId: "instagram-clone-pm-20e1b",
    storageBucket: "instagram-clone-pm-20e1b.appspot.com",
    messagingSenderId: "391951493680",
    appId: "1:391951493680:web:f7992a1ff7284796e81bf5",
    measurementId: "G-G0WS4KC4D6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
//  db
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };

