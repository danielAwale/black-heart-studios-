import React from 'react';
// images
import Logo from '../assets/logo.jpeg'

const Header = () => {
  return <div className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* logo */}
        <a href="#">
          <img src={Logo} alt="logo" className='h-[200px]' />
        </a>
        {/* button */}
        <button className='btn btn-sm'>Work With Me</button>
      </div>
    </div>
  </div>;
};

export default Header;
