// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmCatTxCTjBzX_6pYJqQP0Epfi57kg6rE",
    authDomain: "dragon-news-d71ee.firebaseapp.com",
    projectId: "dragon-news-d71ee",
    storageBucket: "dragon-news-d71ee.appspot.com",
    messagingSenderId: "149165699532",
    appId: "1:149165699532:web:79bfc576dacfdd7355ed69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;