// Import the functions you need from the SDKs you need
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKOeT6L4Gxbx7_LrVlDfOFXm27v7HNijM",
  authDomain: "react-store-e0ad2.firebaseapp.com",
  projectId: "react-store-e0ad2",
  storageBucket: "react-store-e0ad2.appspot.com",
  messagingSenderId: "498886820642",
  appId: "1:498886820642:web:e0aec814e45f48f6e31b7b",
  measurementId: "G-M1VDBSXFWZ"
};

// Initialize Firebase
const ReactStoreFirebaseApp = initializeApp(firebaseConfig);
//const ReactStoreAnalytics = getAnalytics(app);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    propmt:'select_account'
})

/** getAuth saves the instances or keep track of all the authentications states 
 * that happens in the application */

export const auth = getAuth(ReactStoreFirebaseApp)
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore(ReactStoreFirebaseApp)

export const createUserDocFromAuth = async (userAuth, otherProps) => {
  if(!userAuth) return

  const { uid } = userAuth

  /** 
   * the doc function Gets a DocumentReference instance that refers to the document at the specified absolute path.
   * it takes in 3 agurements/params
   * 1. @param firestore — A reference to the root Firestore instance.
   * 2. @param path — A slash-separated path to a document.
   * 3. @param pathSegments - Additional path segments that will be applied relative to the first argument.
   * */ 

  const userDocRef = doc(db, 'users', uid)

  // the getdoc function retrieves the data about a document in the database
  const userSnapshot = await getDoc(userDocRef)

  if(!userSnapshot.exists()) {
   const {displayName, email } = userAuth
   const createdAt = new Date()
/**
 * setDoc allows you to write to a referenced document and creates the document in the database if it doesn't exist
 * setDoc takes in two arguments, (document reference and the document configuration/schema/data)
 * 1. @param reference  — A reference to the document to write.
 * 2. @param data — A map of the fields and values for the document.
 * 
 * @returns - A Promise resolved once the data has been successfully written to the backend
 * (note that it won't resolve while you're offline).
 *  */  
    try {
      await setDoc(userDocRef, {
      displayName, email, createdAt, ...otherProps
    })

    } catch (error) {
      console.log('error creating user', error.message)
    }

  }
  return userDocRef
}

export const CreateUserWithEmailAndPasswordAuth = async (email, password) => {
  if(!email || !password) return
  return await createUserWithEmailAndPassword(auth, email, password)
}

export const SignInWithEmailAndPasswordAuth = async (email, password) => {
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password)
}

export const SignOutUser = async () => {
  return await signOut(auth)
}