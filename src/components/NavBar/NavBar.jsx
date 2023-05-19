import React from 'react'

import {navigation} from '../data'
import { Link } from 'react-scroll'

function NavBar() {
  return (
    <nav>
      <ul className='flex space-x-10 capitalize text-[15px]'>
        {navigation.map((item, index) => {
          return (
            <li className='text-white hover:text-fuchsia-500 cursor-pointer' > </li>
          )
        })}

      </ul>
    </nav>
  )
}

export default NavBar