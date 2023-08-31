import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User
} from 'firebase/auth';
import { auth, db } from './config';
import {
  collection,
  addDoc,
  getDoc,
  doc,
  setDoc,
  query,
  orderBy,
  getDocs
} from 'firebase/firestore';

export const signUp = async (
  email: string,
  password: string,
  name: string,
  surname: string
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    if (user) {
      await saveUser(user, name, surname);
    }
    return user;
  } catch (error) {
    throw error;
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    if (user) {
      const userData = await getUser(user.uid);
      return { uid: user.uid, ...userData };
    }
    return null;
  } catch (error) {
    throw error;
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};

const saveUser = async (user: User, name: string, surname: string) => {
  const usersRef = collection(db, 'users');
  try {
    const docRef = await setDoc(doc(usersRef, user.uid), {
      name: name,
      surname: surname
    });
    return docRef;
  } catch (e) {
    throw e;
  }
};

export const getUser = async (id: string) => {
  try {
    const docRef = await getDoc(doc(db, 'users', id));
    return docRef.data();
  } catch (e) {
    throw e;
  }
};

export const uploadPost = async (post: any) => {
  try {
    const docRef = await addDoc(collection(db, 'posts'), post);
    return docRef;
  } catch (e) {
    throw e;
  }
};

export const getPosts = async () => {
  try {
    const postsRef = collection(db, 'posts');
    const postsQuery = query(postsRef, orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(postsQuery);
    const posts = querySnapshot.docs.map(doc => {
      return { id: doc.id, ...doc.data() };
    });
    return posts;
  } catch (e) {
    throw e;
  }
};

export const getPost = async (id: string) => {
  try {
    const docRef = await getDoc(doc(db, 'posts', id));
    return docRef.data();
  } catch (e) {
    throw e;
  }
};

export const getOneUserPosts = async (userId: string) => {
  try {
    const postsRef = collection(db, 'posts');
    const postsQuery = query(postsRef, orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(postsQuery);

    const userPosts = querySnapshot.docs
      .filter(doc => doc.data().userId === userId)
      .map(posts => ({ id: posts.id, ...posts.data() }));

    return userPosts;
  } catch (error) {
    throw error;
  }
};
