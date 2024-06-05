import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBLCTZAa5dBVxoz3zLfIeyjSIeyZrVP59I",
    authDomain: "be-blogs.firebaseapp.com",
    databaseURL: "https://be-blogs-default-rtdb.firebaseio.com",
    projectId: "be-blogs",
    storageBucket: "be-blogs.appspot.com",
    messagingSenderId: "192102493191",
    appId: "1:192102493191:web:f000be1dfbe044840c4ea2"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage(app);

export { auth, db, storage };