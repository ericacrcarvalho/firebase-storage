import { initializeApp } from '@firebase/app';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjpcY8CVJ64SEAx_dVzGhv9zjOrNJFMlM",
    authDomain: "fir-store-8a70e.firebaseapp.com",
    projectId: "fir-store-8a70e",
    storageBucket: "fir-store-8a70e.appspot.com",
    messagingSenderId: "1036181097506",
    appId: "1:1036181097506:web:3b635041b6dd09bf970e7b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);