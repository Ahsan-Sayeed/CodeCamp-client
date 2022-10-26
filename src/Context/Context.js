import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import app from '../Firebase/Firebase.cofig';

export const UserContext = createContext();

const auth = getAuth(app);

const Context = ({children}) => {
    const [userInfo,setUserInfo] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            if(user&&user.uid){
                setUserInfo(user);
                setLoading(false);
            }
            else{
                setUserInfo(null);
                setLoading(false);
            }
        })
        return ()=>{
            unsubscribe();
        }
    },[])


    const signUp = (email,password) =>createUserWithEmailAndPassword(auth,email,password);

    const getPhotoAndName = (obj) => updateProfile(auth.currentUser,obj);

    const verify = () => sendEmailVerification(auth.currentUser);

    const loginByEmailAndPassword = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut = () => {
        setLoading(false);
        return signOut(auth);
    }

    const User = {userInfo,loading,signUp,getPhotoAndName,verify,loginByEmailAndPassword,logOut};
    return (
        <UserContext.Provider value={User}>
            {children}
        </UserContext.Provider>
    );
};

export default Context;