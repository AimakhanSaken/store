import { initializeApp} from 'firebase/app';
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
} from 'firebase/auth'

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBynefCZQzzriVUoLkRl3GDjUBTCO84URM",
    authDomain: "store-db-2d3e8.firebaseapp.com",
    projectId: "store-db-2d3e8",
    storageBucket: "store-db-2d3e8.appspot.com",
    messagingSenderId: "1088628602588",
    appId: "1:1088628602588:web:3c18d9b47717d06928a619"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt: 'select_account'
  });

  export const auth =getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);


  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation,
        })
      } catch(error) {
        console.log('error', error.message);
      }
    }
    return userDocRef;
  };

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await  createUserWithEmailAndPassword(auth, email, password);
  };


  