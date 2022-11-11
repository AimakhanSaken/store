import { initializeApp} from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider
} from 'firebase/auth'

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

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: 'select_account'
  });

  export const auth =getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);