import React from 'react'
import { social } from '../../../Data'
function Socials() {
  return (
    <div className='hidden lg:block'>
        <ul className='flex space-x-6'>


    {social.map((item,index)=>{
      

      return (
        <li  key={index} className={`flex justify-content items-center ${item.color ? item.color : 'text-white'} ${item.colorHover ? item.colorHover: "hover:text-red-500"}`}>

            <a className="text-base  text-5xl  " href={item.href} target='_blank'>

              {item.icon}
            </a>
        </li>
      )
    })}
        </ul>

    </div>
  )
}

export default Socials