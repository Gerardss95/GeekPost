import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, User} from 'firebase/auth';
import {auth, db, app} from './config';
import { collection, addDoc} from "firebase/firestore";

export const signUp = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user;
  } catch (error) {
    throw error;
  }
}

export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user;
  } catch (error) {
    throw error;
  }
}

export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
}

export const onAuthStateChange = (callback: any) => {
  return onAuthStateChanged(auth, callback);
}


//create a function that saves name and surname into the firestore database
export const saveUser = async (user: User, name: string, surname: string) => {
  try {
  const docRef = await addDoc(collection(db, "users"), {
    name: name,
    surname: surname,
    email: user.email
  });
  return docRef
} catch (e) {
  throw e;
}
}

