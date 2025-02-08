import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.confiq';


export const AuthContext=createContext()
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    console.log("auth",user);

    // user Create
    const createNewUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
// login
const LoginUser=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}
    // signOut(auth)
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
    const authInfo={
        user,setUser,logOut,LoginUser,
        createNewUser,loading,
    }

    useEffect(()=>{
      const disconnect=  onAuthStateChanged(auth,currentUser=>{
             setUser(currentUser)
             setLoading(false)
        })
        return()=>{
            disconnect()
        }
    },[])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
