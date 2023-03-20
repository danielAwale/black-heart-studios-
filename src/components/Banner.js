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
          <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>Kashaga</motion.h1>
          <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-3'>I am a</span>
            <TypeAnimation sequence={[
              "Producer",
              2000,
              "Songwriter",
              2000,
              "Musician",
              2000
            ]} speed={50} className="text-accent" wrapper="span" repeat={Infinity} />
          </motion.div>
          <motion.p variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mb-8 max-w-lg mx-auto lg:mx-0'>Vancouver Island Music Studio
            Recording, mixing, mastering & cover art.</motion.p>
          <motion.div variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex max-w-max gap-6 items-center mb-12 mx-auto lg:mx-0'>
            <button className='btn btn-lg'>Contact Me</button>
          </motion.div>
          {/* socials */}
          <motion.div variants={fadeIn('up', 0.7)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTiktok />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
          </motion.div>
        </div>
        {/* image */}
        <div className='hidden lg:flex mx-auto'>
          <img src={Image} alt="banner" className='h-[700px]' />
        </div>
      </div>
    </div>
  </section>;
};

export default Banner;
