import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB8fFVxN6gDl-mVglnPhPB6dvEWtnGlcZQ",
    authDomain: "api-firebase-6f6f4.firebaseapp.com",
    projectId: "api-firebase-6f6f4",
    storageBucket: "api-firebase-6f6f4.appspot.com",
    messagingSenderId: "541175257894",
    appId: "1:541175257894:web:af9128e16d2ff64b98ffe7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
