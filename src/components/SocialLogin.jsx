import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div>
            <h1 className='font-semibold mb-3'> LogIn With</h1>
            <div className='*:w-full space-y-2'>
                <button className='btn'> <FaGoogle /> Log in with google</button>
                <button className='btn'> <FaGithub />Log in with git hub </button>
            </div>
        </div>
    );
};

export default SocialLogin;