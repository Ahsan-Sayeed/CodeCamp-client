import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, updateProfile} from 'firebase/auth';
import app from '../Firebase/Firebase.cofig';

export const UserContext = createContext();

const auth = getAuth(app);

const Context = ({children}) => {
    const [userInfo,setUserInfo] = useState(null);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            if(user&&user.uid){
                console.log(user)
                setUserInfo(user);
                setIsLoading(false);
            }
            else{
                setUserInfo(null);
                setIsLoading(false);
            }
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const signUp = (email,password) =>createUserWithEmailAndPassword(auth,email,password);

    const getPhotoAndName = (obj) => updateProfile(auth.currentUser,obj);

    const verify = () => sendEmailVerification(auth.currentUser);



    const User = {userInfo,isLoading,signUp,getPhotoAndName,verify};
    return (
        <UserContext.Provider value={User}>
            {children}
        </UserContext.Provider>
    );
};

export default Context;