import React from 'react';
import { Link } from 'react-router-dom';

import logo from "../assets/user.png"
const Navbar = () => {
    return (
        <div>
           <div className='flex justify-between items-center'>
            <div ></div>
            <div className='nav space-x-5'> 
                 <Link to="/">Home</Link>
                 <Link to="/about">About</Link>
                 <Link to="/carrer">carrer</Link>
                 
                 </div>
            <div className='login flex space-x-1 justify-center items-center'>
                <img src={logo} alt="" />
               <Link to="/auth/login"> <button className='bg-amber-300 p-2'>Login</button></Link>
            </div>
           </div>
        </div>
    );
};

export default Navbar;