import React from 'react'
import { InView } from 'react-intersection-observer'
import { inViewHandle } from '../../AnimationHandle.js'
import glasses from '../../assets/img/logos/glasses.svg'
import { motion, useAnimation } from 'framer-motion'
import {skills} from '../../Data.jsx'

function Skils() {
    const animations = useAnimation(null)
  return (
    <InView onChange={(InView) => inViewHandle(InView, animations)}>
      <section className='h-76 bg-primary py-12'>
      <motion.div className='grid grid-cols-6 md:grid-flow-row' initial={{opacity: 0 , scale: 0.8}} animate={animations} transition={{duration: 1.2}}>  

      {skills.map((skill, index) => {
          return (
            <div className='max-h-xs' key={index}>
              <img src={skill.image} alt="" />
            </div>  
          )
      } )}




      </motion.div>

      </section>

    </InView>
  )
}

export default Skils