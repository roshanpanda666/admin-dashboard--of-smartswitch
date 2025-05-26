"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Large screens */}
      <div className='lg:flex hidden justify-between items-center px-20 py-4 text-gray-400 font-mono border-b border-[#273464]'>
        <div>
          <div className='text-[#09A1FF] text-2xl cursor-pointer'>S.P.A.R.K</div>
          <div className='text-sm'>control panel</div>
        </div>
        <div className='flex gap-10 text-lg'>
          <Link href='mongodata'><div className='hover:text-[#09A1FF] cursor-pointer'>MongoDB data</div>
</Link>
          <div className='hover:text-[#09A1FF] cursor-pointer'>Remote control</div>
          <div className='hover:text-[#09A1FF] cursor-pointer'>Dashboard</div>
        </div>
      </div>

      {/* Mobile view */}
      <div className='lg:hidden flex flex-col px-4 py-3 border-b border-[#273464] text-gray-300 font-mono'>
        <div className='flex justify-between items-center'>
          <div>
            <div className='text-[#09A1FF] text-xl'>SMART SWITCH</div>
            <div className='text-sm'>control panel</div>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className='text-white'>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {menuOpen && (
          <div className='mt-4 flex flex-col gap-3 text-base'>
            <Link href='mongodata'><div className='hover:text-[#09A1FF] cursor-pointer'>MongoDB data</div></Link>
            <div className='hover:text-[#09A1FF] cursor-pointer'>Remote control</div>
            <div className='hover:text-[#09A1FF] cursor-pointer'>Dashboard</div>
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;
