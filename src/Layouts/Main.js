import React from 'react';
import NavigationBar from '../Components/NavigationBar/NavigationBar';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router-dom';


const Main = () => {
    return (
        <div style={{overflow:'hidden'}}>
            <NavigationBar />
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;