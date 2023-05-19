import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { motion, useAnimation } from 'framer-motion'
import React from 'react'
import { InView } from 'react-intersection-observer'
import { inViewHandle } from '../../AnimationHandle.js'
import glasses from '../../assets/img/logos/glasses.svg'
import ArrowSection from '../ArrowSection'

function Hero() {

  const animations = useAnimation();




  return (
    <InView onChange={(inView) => inViewHandle(inView, animations)}>
    <section id='home' className='h-[100vh] bg-primary flex items-center w-full flex-col'> 
    
      <div className='container mx-auto h-full flex justify-center'>
        <motion.div className='content-wrapper flex items-center ' initial={{opacity:0, scale: 0.5}} animate={animations} >

          <div className='w-1 mr-8 md:h-72 bg-gradient-to-br from-blue-500 via-orange-500 to-red-500 ' />
          <div className='flex flex-col items-center lg:items-start'>
            <div className='flex'>
            <div className='text-content'>
          <h1 className='text-4xl lg:text-5xl pb-4 font-bold'>
            Hi, I'm <span className='text-orange-500'>Joel</span>
          </h1>

          <p className='pb-4 max-w-[500px] text-lg text-left'>
          
          I'm 24 Years old passionate about technology and obsessed with constantly learning, I'm looking for an opportunity as a Backend Developer.
          </p>

          <img src={glasses} alt="glasses"  className='h-16 hidden md:block lg:block'/>
          </div>
            </div>
       
          </div>
       
        <div className='w-1/3 h-full lg:block hidden relative'>
        <Canvas className='absolute inset-0'>
          <OrbitControls  enableZoom={false}/>
          <ambientLight intensity={0.5} />
          <directionalLight position={[3,2,1]} />
          <Sphere args={[1,100,200]} scale={1} >
          <MeshDistortMaterial  color="orange" attach='material' distort={0.5} speed={2}/>
          </Sphere>
          

        </Canvas>

            
        </div>
        </motion.div>

       
      </div>
      <div className='bg-primary flex items-center justify-center'>
        <ArrowSection/>
        </div>
    </section>

    </InView>
  )
}

export default Hero