// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth,GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCzsYjlGJmMunkzNhofQyxBQpzCyZ6L4OU",
  authDomain: "interviewai-93539.firebaseapp.com",
  projectId: "interviewai-93539",
  storageBucket: "interviewai-93539.firebasestorage.app",
  messagingSenderId: "397837414276",
  appId: "1:397837414276:web:d3b7870084d128db6e77d1",
  measurementId: "G-XSZWC1F8JZ"
};

// Initialize Firebase
const app = !getApps.length ?  initializeApp(firebaseConfig) : getApp();

export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
auth.languageCode = 'en';
export const db = getFirestore(app);

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const user = result.user;

    const idToken = await user.getIdToken();

    // Send to server to store in DB and set session
    await fetch("/api/google-auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        idToken,
      }),
    });

    return { user, token, idToken }; // ✅ returning all
  } catch (error) {
    console.error("Error signing in with Google: ", error);
    throw error;
  }
};
