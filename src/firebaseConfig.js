import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAA7aThF35PNi3UR0EcLE6ODjhb0LZaTIg",
  authDomain: "tienda-b0bc7.firebaseapp.com",
  projectId: "tienda-b0bc7",
  storageBucket: "tienda-b0bc7.appspot.com",
  messagingSenderId: "644266811315",
  appId: "1:644266811315:web:d3fd76ac266910de5835c6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)