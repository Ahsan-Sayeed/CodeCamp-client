import React, { createContext } from 'react';

const UserContext = createContext();

const Context = ({children}) => {


    const User = {};
    return (
        <UserContext.Provider value={User}>
            {children}
        </UserContext.Provider>
    );
};

export default Context;