import React from 'react';
//import icons
import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsClipboardData, BsChatSquareText } from 'react-icons/bs'

// import scroll
import { Link } from 'react-scroll'

const Nav = () => {
  return <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <div className='container mx-auto'>
      <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl items-center text-white/50'>
        <Link to='home' smooth={true} spy={true} offset={-300} activeClass="active" className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
          <BiHomeAlt />
        </Link>
        <Link to='about' smooth={true} spy={true} activeClass="active" className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
          <BiUser />
        </Link>
        <Link to='services' smooth={true} spy={true} activeClass="active" className="cursor-pointer w-[60px] h-
        [60px] flex items-center justify-center">
          <BsClipboardData />
        </Link>
        <Link to='contact' smooth={true} spy={true} activeClass="active" className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
          <BsChatSquareText />
        </Link>
      </div>
    </div>
  </nav>;
};

export default Nav;
