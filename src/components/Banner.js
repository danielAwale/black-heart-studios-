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
  return <section className='section' id='home'>
    <div className='container mx-auto'>
      <div>
        {/* text */}
        <div>
          <h1>Kashaga</h1>
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
          <p>something something something something something something something something something something something somethingsomething somethingsomething</p>
          <div>
            <button className='btn btn-lg'>Contact Me</button>
          </div>
          {/* socials */}
          <div>
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
          <img src={Image} alt="banner" />
        </div>
      </div>
    </div>
  </section>;
};

export default Banner;
