// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDpV8iJ1AJhO4njQDgJbhHEfb4zlCj5quo",
    authDomain: "vite-project-c7068.firebaseapp.com",
    projectId: "vite-project-c7068",
    storageBucket: "vite-project-c7068.appspot.com",
    messagingSenderId: "96296465591",
    appId: "1:96296465591:web:952f208ddbc92b8b640932",
    measurementId: "G-S2XP51MEMX"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);



firebase.initializeApp(firebaseConfig);

export const AuthService = {
  register: async (email: string, password: string) => {
    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  },
  login: async (email: string, password: string) => {
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  },
  logout: async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      throw error;
    }
  }
};
//export default app; // экспортируем app, чтобы его можно было использовать в других файлах
export default auth; // экспортируем auth, чтобы его можно было использовать в других файлах
