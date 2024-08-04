import React from 'react'
import { IoMenu } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddFill } from "react-icons/ri";
import { BsBellFill } from "react-icons/bs";


const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-[#212121] opacity-95 sticky px-14 h-14'>
      <div className='flex gap-8 items-center text-2xl text-white'>
        <div>
          <IoMenu />
        </div>
        <div className='flex gap-2 items-center justify-center '>
          <FaYoutube className='text-3xl text-red-500'/>
          <span className='text-2xl '>MontyPlay</span>
        </div>
        </div>
        <div className='flex items-center justify-center gap-5'>
          <form >
            <div className='flex bg-[#191921] items-center h-10 px-4 rounder-3xl pr-2'>
              <div className='flex gap-5 items-center pr-5'>
                <input type="text" placeholder='Search' className='w-96 bg-zinc-900 focus:outline-none border-none'/>
              
              </div>
              <button className='h-10 w-16 flex items-center justify-center bg-zinc-900 rounded-r-3xl'>
              <CiSearch className='text-3xl '/>
              </button>
            </div>
          </form>
          
          <div className='text-xl p-3 bg-zinc-900 rounded-full'>
          <FaMicrophone />
          </div>
        </div>
          <div className='flex gap-7 items-center text-xl'>
          <RiVideoAddFill />
            <div className='relative'>
            <BsBellFill />
            <span className='absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1'>9+</span>
            </div>
            <img src="https://th.bing.com/th/id/OIP.FGdryJLhFAzSzZR2SKnKMgHaE8?rs=1&pid=ImgDetMain" alt="profile-logo" className='w-9 h-9 rounded-full '/>
          </div>
        </div>
      
   
  )
}

export default Navbar
