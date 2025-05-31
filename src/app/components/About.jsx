'use client'

import React, { useRef } from 'react'
import Head from './Head'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

const AboutVariants1 = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.4, duration: 0.4 },
  },
}

const AboutVariants2 = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.4, duration: 0.4 },
  },
}

const About = () => {
  const title = 'About Sobu Stretch'
  const subtitle = 'About Us'

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className='w-full px-6 lg:px-32 lg:pt-16 pt-16 pb-8 flex flex-col justify-center bg-[#F7F4F1]'>
      <Head title={title} subtitle={subtitle} />
      <div
        ref={ref}
        className='w-full flex flex-col-reverse lg:flex-row justify-between items-center pt-10 gap-10'
      >
        <motion.p
          variants={AboutVariants1}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          className='text-base sm:text-lg lg:text-xl text-neutral-600 max-w-[600px] text-justify'
        >
         Founded in 1980 by Noma Meeker, Noma's School of Gymnastics has been a cornerstone of the Anniston community for over four decades. Our mission is to provide a supportive environment where gymnasts of all ages can develop their skills, confidence, and love for the sport. <br />
          Our experienced coaches focus on technique, safety, and personal growth, guiding each student through a journey of physical and mental development. From recreational classes to competitive teams, we offer programs tailored to meet diverse needs and aspirations.
          Join us at Noma's School of Gymnastics, where dedication meets excellence, and every gymnast is empowered to shine.
        </motion.p>
        <motion.div
          variants={AboutVariants2}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          className='w-full max-w-[500px]'
        >
          <Image
            src='/barber.jpg'
            alt='image'
            width={500}
            height={100}
            className='w-full rounded-xl border-2 border-[#D14334] object-cover'
          />
        </motion.div>
      </div>
    </div>
  )
}

export default About
