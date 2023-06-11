import React, { createContext, useState, useEffect } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()
export const AuthContext = createContext()


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    //registration
    const createUser =(email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //login
    // const login = (email, password) =>{
    //     return signInWithEmailAndPassword(auth, email, password)
    // }

    //sign out
    // const logOut = () =>{
    //     setLoading(true)
    //     return signOut(auth)
    // }

    //google login
    // const googleLogin = () =>{
    //     setLoading(true)
    //     return signInWithPopup(auth, googleProvider)
    //  }

     //observe auth state
    //  useEffect(() =>{
    //     const unsubscribe = onAuthStateChanged(auth, currentUser =>{
    //          console.log('auth state changed', currentUser)
    //          setUser(currentUser)
    //          setLoading(false)
    //      })
    //      return () =>{
    //          unsubscribe()
    //      }
    //        }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        // login,
        // googleLogin,
        // logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;