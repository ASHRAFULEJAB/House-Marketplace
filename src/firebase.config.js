
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBoo_sVUBRTeF2uRsDVq98753fhcgq5F2w",
  authDomain: "house-marketplace-app-77319.firebaseapp.com",
  projectId: "house-marketplace-app-77319",
  storageBucket: "house-marketplace-app-77319.appspot.com",
  messagingSenderId: "408368268818",
  appId: "1:408368268818:web:31df44b822b0a031bf7acb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()