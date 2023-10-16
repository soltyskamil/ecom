// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvZT_um7gsvcGFSOF-YHi2bZMv_wuvfME",
    authDomain: "e-commerce-e7469.firebaseapp.com",
    projectId: "e-commerce-e7469",
    storageBucket: "e-commerce-e7469.appspot.com",
    messagingSenderId: "527306522883",
    appId: "1:527306522883:web:d1ae06e4f2a7340ea96936",
    measurementId: "G-3EF2KBMGTP"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig)

// initialize firebase authentication and get a reference to the service
export const auth = getAuth(app)