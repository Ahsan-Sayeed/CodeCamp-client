import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../Context/Context';


const PrivateRoute = ({children}) => {
    const {userInfo,loading} = useContext(UserContext);
    const location = useLocation();
    if(loading){
        return <h1>Loading....</h1>
    }
    if(userInfo === null){
        return <Navigate to='/login' state={{from:location.pathname}} replace/>
    }
    return children;
};

export default PrivateRoute;