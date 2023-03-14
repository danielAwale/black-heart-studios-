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
          <div>
            <span>I am a</span>
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
