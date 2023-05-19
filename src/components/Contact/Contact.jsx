import React, { useState } from 'react'
import { InView } from 'react-intersection-observer'
import { inViewHandle } from '../../AnimationHandle.js'
import glasses from '../../assets/img/logos/glasses.svg'
import { inView, motion, useAnimation } from 'framer-motion'

import emailjs from 'emailjs-com'
function Contact() {
  const animation = useAnimation()

  const [name , setName] = useState()

  const [email , setEmail] = useState()
  const [subject , setSubject] = useState()
  const [message , setMessage] = useState()


  const sendEmail = (e) => {
    e.preventDefault()
    if(!name || !email || !subject || !message){
      alert('Please fill all the fields')
      return
    }

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAILJS_USER_ID,
    ).then((result) => {
      alert('Message sent')
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
      console.log(result.text)
    } ).catch((err) => {
      console.log(err)
    })

  }
  

  return (
    <InView onChange={(inView) => inViewHandle(inView, animation)}>
      <section id='contact' className='section bg-primary'>
      <motion.div className='content-wrapper mx-auto' initial={{opacity: 0, scale: 0.8}} animate={animation} transition={{duration: 0.5}}> 
            <div className='flex flex-col lg:gap-x-8 lg:flex-row'>
                <form action="" onSubmit={sendEmail} className='space-y-8 w-full max-w-[780px]'>
                  <div className='flex gap-8'> 
                    <input type="text" className='input' name='name'  placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type="text" className='input'  name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                  </div>
                  <input type="text" className='input'  name='subject' placeholder='subject' value={subject} onChange={(e) => setSubject(e.target.value)}/>
                  <textarea type="text" className='textarea'  name='message' placeholder='message' value={message} onChange={(e) => setMessage(e.target.value)}/>
                    <button className='btn btn-lg bg-orange-700 text-2xl text-white ml-4'>Send Message</button>
                </form>

                <div className='flex flex-col'>
              <h1 className='section-title text-5xl'>Contact me</h1>

              <p className='text-lg text-2xl text-gray-200 mt-4 max-w-md' >
                I'm currently looking for new opportunities, my inbox is always open.
              </p>
                </div>
            </div>
          </motion.div>

      </section>
    </InView>
  )
}

export default Contact