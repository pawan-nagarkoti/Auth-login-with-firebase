import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA88gAAXGXXMyObSnYN_OJsIpZP1mqHw5I",
  authDomain: "auth-firebase-796ab.firebaseapp.com",
  projectId: "auth-firebase-796ab",
  storageBucket: "auth-firebase-796ab.appspot.com",
  messagingSenderId: "794306912189",
  appId: "1:794306912189:web:64dbd8be7b1571da0f7cd4",
  measurementId: "G-J77YHSTRNP"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();