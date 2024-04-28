// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqAvOnlBRkuPR_-XhsaPPmEz7FY6ip2cU",
  authDomain: "crift-site.firebaseapp.com",
  projectId: "crift-site",
  storageBucket: "crift-site.appspot.com",
  messagingSenderId: "262374584431",
  appId: "1:262374584431:web:4c0606088be82a6f759d9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
