import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"; 
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    // const user = { displayName: 'akkas align' }
    const [user, setUser] = useState(null);
    //email login
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }
    //register user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //signIn
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // logOut
    const logout = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside state change',currentUser);
            setUser(currentUser);
        });
        return unsubscribe();
    })
    const authInfo = { user, providerLogin, logout, createUser, signIn }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider; 