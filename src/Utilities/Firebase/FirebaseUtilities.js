// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import{getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCnmHjXWpAWtNfEx7U37mpvVi5F7lILkrs",
    authDomain: "weave-whisper.firebaseapp.com",
    projectId: "weave-whisper",
    storageBucket: "weave-whisper.appspot.com",
    messagingSenderId: "874075523455",
    appId: "1:874075523455:web:5ba78eb33a968918ec324a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
   prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = ()=> signInWithPopup(auth, googleProvider);
export const signInGoogleRedirect = ()=> signInWithRedirect(auth, googleProvider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) =>{
    const userDocRef = doc(db, "users", userAuth.uid);
    const userSnapShot = await getDoc(userDocRef);
    if (!userSnapShot.exists()){
        const {displayName, email} = userAuth;
        const createDate = new Date();
        try{
            await setDoc(userDocRef, {displayName, email, createDate, ...additionalInformation});
        }catch (error){
            console.log(error.message);
        }
    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password)=>{
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthWithEmailAndPassword = async (email, password)=>{
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async ()=> await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);