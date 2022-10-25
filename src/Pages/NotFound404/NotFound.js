import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='text-center my-5 py-5 bg-light'>
            <h1>Oops!</h1>
           <h3 className='text-danger'>404 -  PAGE NOT FOUND</h3>
           <p>The page you are looking for might have been removed <br />
              had it's name changed or is temporary unavailable
           </p>
           <Button className='rounded-pill' onClick={()=>navigate('/')}>Go Back To Home</Button>
        </div>
    );
};

export default NotFound;