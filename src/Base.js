import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyBTEbh-yXl3jClFZHAWmtsAePEyTMo1dow",
    authDomain: "utac-ngo.firebaseapp.com",
    projectId: "utac-ngo",
    storageBucket: "utac-ngo.appspot.com",
    messagingSenderId: "907354637422",
    appId: "1:907354637422:web:e5c9ac7a9e6c0d666e927f"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);