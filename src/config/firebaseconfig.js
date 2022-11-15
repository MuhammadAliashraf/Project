// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkaxB0knkHZl4GWFhP1XepIGCh-aVd2vM",
  authDomain: "adminpanel-28d5d.firebaseapp.com",
  databaseURL: "https://adminpanel-28d5d-default-rtdb.firebaseio.com",
  projectId: "adminpanel-28d5d",
  storageBucket: "adminpanel-28d5d.appspot.com",
  messagingSenderId: "736762570071",
  appId: "1:736762570071:web:88473b1939e13eb07c8a12",
  measurementId: "G-R3N9KD7QNY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;