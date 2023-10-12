import React from 'react'
import logo from '../assest/logo1.png'

const Navbarr = () => {
  return (
    <div>
     <div className='fixed left-44 text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 '>
    <h1 className='w-full mt-6 ml-20'><img className='h-24 border' src={logo} alt="/"/></h1>
    <ul className='flex pl-36'>
        <li className='pl-20 text-2xl font-bold hover:text-yellow-400'><a href="http://">Community</a></li>
        <li className='pl-20 text-2xl font-bold hover:text-yellow-400'><a href="http://">Events</a></li>
        <li className='pl-20 text-2xl font-bold hover:text-yellow-400'><a href="http://">References</a></li>
        <li className='pl-20 text-2xl font-bold hover:text-yellow-400'><a href="http://">Register</a></li>
    </ul>
    </div>
    </div>
  )
}

export default Navbarr