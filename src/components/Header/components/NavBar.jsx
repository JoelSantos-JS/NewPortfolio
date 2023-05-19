import React from 'react'

import {navigation} from '../../../Data'
import { Link } from 'react-scroll'

function NavBar() {
  return (
    <nav>
      <ul className='flex space-x-8 capitalize text-[15px]'>
        {navigation.map((item, index) => {
          return (
            <li className='text-white hover:text-fuchsia-500 cursor-pointer' key={index} >
              
              <Link to={item.href} activeClass='active' spy={true} smooth={true} offset={-70} className='transition-all duration-300' duration={500} >{item.name}</Link>  
               
               </li>
          )
        })}

      </ul>
    </nav>
  )
}

export default NavBar