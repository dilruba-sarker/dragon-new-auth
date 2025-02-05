import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <div className="join join-vertical flex gap-4 mt-4 ">
  <button className="btn join-item  justify-start"><FaFacebook></FaFacebook> facebook</button>
  <button className="btn join-item justify-start"><FaInstagram></FaInstagram>Instagram</button>
  <button className="btn join-item justify-start"><FaTwitter></FaTwitter>Twitter</button>
</div>
        </div>
    );
};

export default FindUs;