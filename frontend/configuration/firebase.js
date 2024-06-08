import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyA6hTIKb9nyMYaiYqKnLcuFupHkJVQ043Q",
  authDomain: "portfolio-a3128.firebaseapp.com",
  projectId: "portfolio-a3128",
  storageBucket: "portfolio-a3128.appspot.com",
  messagingSenderId: "494972772448",
  appId: "1:494972772448:web:ce2dcc82616396ff046305",
  measurementId: "G-5DLE90R87D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app)
export{db}