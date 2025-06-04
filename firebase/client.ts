
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDAXCD54nwhxsQGDLP-t3BTrWUDnIUQ9AI",
  authDomain: "ai-mockerview.firebaseapp.com",
  projectId: "ai-mockerview",
  storageBucket: "ai-mockerview.firebasestorage.app",
  messagingSenderId: "372131849867",
  appId: "1:372131849867:web:ae3b3fecd4e8db0c39d68e",
  measurementId: "G-6BME2WYYY6"
};


const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);  