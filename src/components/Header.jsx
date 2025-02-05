import React from 'react';
import logo from "../assets/logo.png"
import moment from 'moment';



const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2'>
         <div><img className='w-[320px]' src={logo} alt="" /></div>
         <h1>Journalism Without Fear or Favour</h1>
        <p>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;