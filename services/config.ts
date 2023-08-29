import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAKiwAJSSKDyr4SEQ3Hwf7kMnO9BmGdki0',
  authDomain: 'geekpost-13b45.firebaseapp.com',
  projectId: 'geekpost-13b45',
  storageBucket: 'geekpost-13b45.appspot.com',
  messagingSenderId: '438533025259',
  appId: '1:438533025259:web:1ff971e9e399c71222bdae',
  measurementId: 'G-0FZJJLJ7RJ'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage};
