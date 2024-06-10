// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsaRXwa1OmkFywXMhHHiDg-rPok7nKli8",
  authDomain: "pr13--auth.firebaseapp.com",
  databaseURL: "https://pr13--auth-default-rtdb.firebaseio.com",
  projectId: "pr13--auth",
  storageBucket: "pr13--auth.appspot.com",
  messagingSenderId: "582282187894",
  appId: "1:582282187894:web:68132bbb015854f7697b57",
  measurementId: "G-R3JMMMWXEM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and set up the Google provider
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
