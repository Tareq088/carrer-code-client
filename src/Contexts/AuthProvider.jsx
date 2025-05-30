import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';

const AuthProvider = ({children}) => {
    const[loading,setLoading] = useState(true);
    const[user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();

            //register
    const createUser =(email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
            //log in user
    const signInUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
                    // google sign in
    const googleSign = () =>{
        return signInWithPopup(auth, googleProvider);
    }
                //log out
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
            // auth state change
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log("user in the auth state change", currentUser);
            setLoading(false)
        });
        return ()=>{ unSubscribe(); }
    } ,[])

    const authInfo = {
        createUser, loading, setLoading, signInUser,user, setUser, logOut, googleSign
    }
    return <AuthContext value={authInfo}>
                {children}
            </AuthContext>


}


export default AuthProvider;