import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAGING_SENDER,
    appId: import.meta.env.VITE_REACT_APP_APP_ID,
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


