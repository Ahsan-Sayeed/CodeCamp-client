import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layouts/Main';
import Blog from '../../Pages/Blog/Blog';

import Login from '../../Pages/Login/Login';
import Registration from '../../Pages/Registration/Registration';
import Courses from '../../Pages/Courses/Courses';
import FAQ from '../../Pages/FAQ/FAQ';
import NotFound from '../../Pages/NotFound404/NotFound';
import CourseDetails from '../../Pages/CourseDetails/CourseDetails';
import Checkout from '../../Pages/Checkout/Checkout';

const Router = createBrowserRouter([
    {   
        path:'/',
        element: <Main></Main>,
        children: 
        [
            {
                path:'/courses',
                element:<Courses/>,
                loader:()=>fetch('http://localhost:5000/')
            },
            {
                path:'/faq',
                element:<FAQ/>
            },
            {
                path:'/blog',
                element:<Blog/>
            },
            {
                path:'/details',
                element: <CourseDetails/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element: <Registration/>
            },
            {
                path:"/checkout/:id",
                element: <Checkout/>
            }
        ]
    },
    {
        path:'*',
        element:<NotFound/>

    }
]);

export default Router;