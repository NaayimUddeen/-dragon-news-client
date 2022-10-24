import React, { createContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword, getAuth, onAuthStateChanged,
    signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile
} from "firebase/auth"; 
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    // const user = { displayName: 'akkas align' }
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //email login
    const providerLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }
    //register user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    //signIn
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // logOut
    const logout = () => {
        setLoading(true) 
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside state change',currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return ()=> unsubscribe();

    },[])
    const authInfo = {
        updateUserProfile, user, loading, providerLogin, logout, createUser, signIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider; 