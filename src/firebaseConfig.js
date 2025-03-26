import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJswJsqkjeZwt1Sy9wKzZgchB09Pq-eWU",
  authDomain: "login-11b9c.firebaseapp.com",
  projectId: "login-11b9c",
  storageBucket: "login-11b9c.appspot.com",
  messagingSenderId: "735009662618",
  appId: "1:735009662618:web:0d000dcd3ad3c2dd23a123"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
