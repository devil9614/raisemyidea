/**
 * Brief description of the function here.
 * @summary If the description is long, write your summary here. Otherwise, feel free to remove this.
 * @param {any} firebaseConfig - Brief description of the parameter here. Note: For other notations of data types, please refer to JSDocs: DataTypes command.
 * @return {ReturnValueDataTypeHere} Brief description of the returning value here.
 */

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import 'firebase/firestore

type firebaseConfigType = {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
};

const firebaseConfig = {
  apiKey: "AIzaSyCUaui-8W7UfuZkHV7kk8RhmsGHVVxrNic",
  authDomain: "raisemyidea-d6840.firebaseapp.com",
  projectId: "raisemyidea-d6840",
  storageBucket: "raisemyidea-d6840.appspot.com",
  messagingSenderId: "435736508953",
  appId: "1:435736508953:web:51cebed22fc66b589b8888",
  measurementId: "G-M6CHKZBT5F",
};
const app = initializeApp(firebaseConfig);
const auth: any = getAuth(app);
export const db = getFirestore();
export const storage = getStorage(app);
const signInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};
const sendPasswordResetEmail = async (email: string) => {
  try {
    await auth.sendPasswordResetEmail(email);
    alert("Password reset link sent!");
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  auth.signOut();
};

export const createUserDocument = async ({ user, additionalData }) => {
  if (!user) return;

  const userRef = doc(db, "users", user.uid);

  setDoc(userRef, { fullname: additionalData, testing: true });

  // const snapshot = await userRef.get();

  // if (!snapshot.exists) {
  //   const { email } = user;
  //   const { fullName } = additionalData;

  //   try {
  //     await userRef.set({
  //       fullName,
  //       email,
  //       createdAt: new Date(),
  //     });
  //   } catch (error) {
  //     console.log('Error in creating user', error);
  //   }
  // }
};
export const addData = async ({ userid, additionalData }) => {
  try {
    const docRef = await setDoc(
      collection(db, "users", userid),
      additionalData
    );
    console.log(docRef?.id);
  } catch (e) {
    console.error(e);
  }
};

// const registerWithEmailAndPassword = async (name, email, password) => {
//   try {
//     const res = await auth.createUserWithEmailAndPassword(email, password);
//     const user = res.user;
//     await db.collection("users").add({
//       uid: user.uid,
//       name,
//       authProvider: "local",
//       email,
//     });
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };
export {
  auth,
  //   signInWithGoogle,
  signInWithEmailAndPassword,
  // registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
};
