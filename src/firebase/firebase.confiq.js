// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjMn9SC9Vqmlrt6Nnoxi9Q3h9rDBzfOFM",
  authDomain: "dragon-news-auth-e263a.firebaseapp.com",
  projectId: "dragon-news-auth-e263a",
  storageBucket: "dragon-news-auth-e263a.firebasestorage.app",
  messagingSenderId: "151944901202",
  appId: "1:151944901202:web:4e323cf7a78589b239258b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;