import React from 'react'

function Navbar() {
  return (
    <div className='main lg:flex md:flex  flex-wrap  justify-between px-4 items-center py-4  bg-green-300 shadow-md'>
    <div className='left'>
   <h1 className=' font-bold text-2xl text-center'>Food App</h1>
    </div>
    <div className='right'>
        <ul className=' flex space-x-3 justify-center'>
            <li className=' cursor-pointer'>Home</li>
            <li className=' cursor-pointer'>About</li>
            <li className=' cursor-pointer'>Contact</li>
            <li className=' cursor-pointer'>Services</li>
        </ul>

    </div>
    </div>
  )
}

export default Navbar