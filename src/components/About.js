import React from 'react';
// countup
import CountUp from 'react-countup';
// intersection observer hook
import{InView, useInView} from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
//variant
import{fadeIn} from '../variants';
const About = () => {
  const[ref,InView]=useInView({
    threshold:0.5,
  });
  return (
  <section className='section' id='about' ref={ref}>
    <div className='container mx-auto'> 
    <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
    {/* image */}
    <motion.div 
    variants={fadeIn('right',0.3)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false,amount:0.3}}
    className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
    </motion.div>
    {/* text */}
    <motion.div
    variants={fadeIn('left',0.5)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false,amount:0.3}} 
    className='flex-1'> 
      <h2 className='h2 text-accent'>About me.</h2>
      <h3 className='h3 mb-4'>
        I`m Freelance Front-end Developer with over 5 years of experience.
      </h3>
       <p className='mb-6'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
       {/* stats */}
       <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
        <div>
          <div className='text-[35px] font-tertiary text-gradient mb-2'>
            {InView ? <CountUp start={0} end={13} duration={3}/> : 
            null}
          </div>
          <div className='font-primary text-sm tracking-[2px]'>
            years of<br/>
            Experience
          </div>
        </div>
        <div>
          <div className='text-[35px] font-tertiary text-gradient mb-2'>
            {InView ? <CountUp start={0} end={15} duration={3}/> : 
            null}
            K+
          </div>
          <div className='font-primary text-sm tracking-[2px]'>
            Projects<br/>
            Compeleted
          </div>
        </div>
        <div>
          <div className='text-[35px] font-tertiary text-gradient mb-2'>
            {InView ? <CountUp start={0} end={12} duration={3}/> : 
            null}
            K+
          </div>
          <div className='font-primary text-sm tracking-[2px]'>
            Satisfied<br/>
            Clients
          </div>
        </div>
       </div>
       <div className='flex gap-x-8 items-center'>
        <button className='btn btn-lg'>Contact me</button>
        <a hre='#' className='text-gradient btn-link'>
          My Portfolio
        </a>
       </div>
    </motion.div>
    </div>
    </div>
  </section>
  );
};

export default About;
