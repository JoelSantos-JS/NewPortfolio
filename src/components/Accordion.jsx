import React, { useState } from 'react'
import { sections } from '../Data'
import { act } from '@react-three/fiber'

function Accordion() {

    const [active, setActive] = useState(null)

    const toggleAccordion =(index) => {
      if(active === index) {
        setActive(null)
      }else {
        setActive(index)
      }
    }

  return (
    <div className='w-full mx-auto '>
        {sections.map((section, index) => (
          <div className='mb-2 ' key={index}>
              <button type='button' onClick={() => toggleAccordion(index) } className='flex justify-between items-center w-full  h-16 py-2 px-4 font-mediu text-left bg-blue-800 text-white text-xl hover:bg-gray-800 focus:outline-none focus:bg-gray-700'>
              <span>{section.title}</span>
              <span>{active === index ? '+' : '-'}</span>
              </button>

              {active === index && (
                <div className='border border-purple-700 bg-gray-700 text-xl  text-white h-16 px-4 py-2 flex items-center'>
                  <p className='w-full'>{section.content}</p>
                </div>
              )}
          </div>
        ) )}

    </div>
  )
}

export default Accordion