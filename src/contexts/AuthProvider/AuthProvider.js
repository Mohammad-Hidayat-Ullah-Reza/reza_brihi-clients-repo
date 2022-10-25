import React, { useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useEffect } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const providerLogin = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const emailAndPasswordSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const emailAndPasswordLogIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("inside auth state change", currentUser);
      if (currentUser) {
        setUser(currentUser);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    providerLogin,
    user,
    emailAndPasswordSignUp,
    emailAndPasswordLogIn,
    updateUserProfile,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
