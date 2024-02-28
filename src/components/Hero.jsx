import React from 'react'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import ComputersCanvas from './canvas/Computers'


const Hero = () => {
  return (
<>
    {/* main hero container */}
    
    <section className='relative w-full h-screen mx-auto flex flex-col'>

      {/* hero body container */}

      <div className={`${styles.paddingX } absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

      {/* purple dot and line vertical container */}

      <div className='flex flex-col justify-center items-center mt-5'>

      <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
      <div className='w-1 sm:h-80 h-40 violet-gradient' />

      </div>

      {/* Hero header and subtext */}

      <div>
      
      <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'> Hunter </span>
      </h1>
      <p className={`${styles.heroSubText} mt-2 text-white-100`}> I'm a web developer that specializes in Microsoft's Power Platform. I bring business innovation through Power Apps, process automation through Power Automate, and game-changing, data-driven insights through Power Bi</p>
      </div>

      </div>

      {/* 3d model*/}

    
      
      </section>
      </>
  )
}

export default Hero