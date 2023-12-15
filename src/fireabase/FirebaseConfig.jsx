
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCUYNqWkXRZ-VpcXftwHpw_iwrssqxBjSg",
  authDomain: "myfirstapp1-1b7f5.firebaseapp.com",
  projectId: "myfirstapp1-1b7f5",
  storageBucket: "myfirstapp1-1b7f5.appspot.com",
  messagingSenderId: "53722157490",
  appId: "1:53722157490:web:66ec8b020fdeccf29554ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export{fireDB, auth}