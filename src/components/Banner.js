import React from 'react';
import image from '../assets/avatar.svg'
import{FaGithub,FaYoutube,FaDribbble} from 'react-icons/fa';
import{TypeAnimation} from 'react-type-animation';
import{motion} from 'framer-motion';
import{fadeIn} from '../variants'

const Banner = () => {
  return( 
    <section className='min-h-[85vh] lg:min-h-[78vh] flex item-center' id='home'>
      <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row  lg:items-center lg:gap-x-12'>
       {/* text */}
        <div className='flex-1 text-center font-secondary lg:text-left'> 
          <motion.h1 
          variants={fadeIn('up',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.7}}
          className='text-[55px] font-bold leading-[0.8 ] lg:text-[75px] mb-2'
          >
          BEN <span>AIDIN</span>
          </motion.h1>
          <motion.div
            variants={fadeIn('up',0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false,amount:0.7}} 
            className='mb-10 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'
          >
            <span className='text-white mr-4'>I am a</span>
            <TypeAnimation sequence={[
              'Developer',
              2000,
              'Designer',
              2000,
              'Youtuber',
              2000,
            ]}
            speed={50} 
            className=' text-accent'
            wrapper='span'
            repeat={Infinity}
            />
          </motion.div>
          <motion.p 
          variants={fadeIn('up',0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.7}} 
          className='mb-8 max-w-lg mx-auto lg:mx-0'
          >
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
          </motion.p>
          <motion.div 
          variants={fadeIn('up',0.6)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.7}} 
          className='flex max-w-max gap-x-6 items-center mb-12'
          >
            <button className='btn btn-lg'>Contact me</button>
            <a href='#' className='text-gradient btn-link'>My Portfolio</a>
          </motion.div>
          {/* social */}
          <motion.div 
          variants={fadeIn('up',0.7)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.7}} 
          className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'
          >
            <a href='#'>
              <FaYoutube/>
            </a>
            <a href='#'>
              <FaGithub/>
            </a>
            <a href='#'>
              <FaDribbble/>
            </a>
          </motion.div>
        </div>
       {/* image */}
        <div className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'> 
          <img src={image} alt=''/>
        </div>
        </div>
      </div>
    
    </section>
    );
};

export default Banner;
