// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// Your web app's Firebase configuration
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

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    propmt:'select_account'
})

/** getAuth saves the instances or keep track of all the authentications states 
 * that happens in the application 
 */

export const auth = getAuth(ReactStoreFirebaseApp)
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore(ReactStoreFirebaseApp)

export const createUserDocFromAuth = async (userAuth, otherProps) => {
  if(!userAuth) return

  const { uid } = userAuth

  const userDocRef = doc(db, 'users', uid)

  // the getdoc function retrieves the data about a document in the database
  const userSnapshot = await getDoc(userDocRef)

  //if user data doesn't exist 
  if(!userSnapshot.exists()) {
   const {displayName, email } = userAuth
   const createdAt = new Date()

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

export const authStateChangedListerner = callback =>  onAuthStateChanged(auth, callback)
