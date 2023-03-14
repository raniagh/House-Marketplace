import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjVObLkPNm5X0PYa-stMNz1M2eYX0ZyQU",
  authDomain: "house-marketplace-app-5eee0.firebaseapp.com",
  projectId: "house-marketplace-app-5eee0",
  storageBucket: "house-marketplace-app-5eee0.appspot.com",
  messagingSenderId: "812557687824",
  appId: "1:812557687824:web:2ca48d1c1b80643f2d7e95",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
