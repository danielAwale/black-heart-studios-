import React from 'react';
//images
import Image from '../assets/banner.jpeg'
//icons
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'
//type animation
import { TypeAnimation } from 'react-type-animation';
//motion
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../variants'

const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        {/* text */}
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <h1 className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>Kashaga</h1>
          <div className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-3'>I am a</span>
            <TypeAnimation sequence={[
              "Producer",
              2000,
              "Songwriter",
              2000,
              "Musician",
              2000
            ]} speed={50} className="text-accent" wrapper="span" repeat={Infinity} />
          </div>
          <p className='mb-8 max-w-lg mx-auto lg:mx-0'>something something something something something something something something something something something somethingsomething somethingsomething</p>
          <div className='flex max-w-max gap-6 items-center mb-12 mx-auto lg:mx-0'>
            <button className='btn btn-lg'>Contact Me</button>
          </div>
          {/* socials */}
          <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTiktok />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
          </div>
        </div>
        {/* image */}
        <div>
          <img src={Image} alt="banner" className='h-[700px]' />
        </div>
      </div>
    </div>
  </section>;
};

export default Banner;
