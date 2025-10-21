// src/auth.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase";

export const registerUser = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
};

export const loginUser = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};

export const logoutUser = async () => {
  await signOut(auth);
};
