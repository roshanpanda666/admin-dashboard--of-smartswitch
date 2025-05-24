import React from 'react'

const Nav = () => {
  return (
    <div className='lg:block hidden'>
      <div className='flex justify-center items-center text-2xl text-gray-400 font-light font-mono gap-[30rem] mt-3'>
        <div>
            <div className='text-[#09A1FF] hover:cursor-pointer'>SMART SWITCH</div>
            <div className='text-[1rem]'>control panel</div>
        </div>
        <div className='flex justify-center items-center gap-16'>
            <div className='hover:text-[#09A1FF] hover:cursor-pointer'>MongoDB data</div>
            <div className='hover:text-[#09A1FF] hover:cursor-pointer'>Remote control</div>
            <div className='hover:text-[#09A1FF] hover:cursor-pointer'>Dashboard</div>
        </div>
      </div>
      <div className='border-[0.5px] border-[#273464] h-full mt-3'></div>
    </div>
  )
}

export default Nav
