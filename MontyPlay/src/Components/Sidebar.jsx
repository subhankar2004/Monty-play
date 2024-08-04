import React from 'react'
import { IoMdHome } from "react-icons/io";
import { BsCameraReels} from "react-icons/bs";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { AiTwotoneLike } from "react-icons/ai";
import { FaHistory } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa";


const Sidebar = () => {

  const mainLinks=[
    {
    icon: <IoMdHome className='text-xl'/>,
    name: "Home"
    },

    {
    icon: <BsCameraReels className='text-xl'/>,
    name: "Shorts"
    },
    {
      icon:<MdOutlineSubscriptions className='text-xl' />,
      name: "Subscriptions"
    }
]

 const otherLinks=[
  {
    icon:<MdOutlineVideoLibrary className='text-xl'/>,
    name:"Library"
  },
  {
    icon:<FaHistory className='text-xl'/>,
    name:"History"
  },
  {
    icon:<MdWatchLater className='text-xl'/>,
    name:"Watch Later"
  },
  {
    icon:<FaThumbsUp className='text-xl'/>,
    name:"Liked Videos"
  }
 ]
  return (
    <div className='w-2/12 bg-[#212121] p-2 pr-5 overflow-auto pb-8 h-screen'>
      <ul className='flex flex-col border-b-3 border-b-gray-600 '>
        {mainLinks.map(({icon,name})=>{
          return (
            <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 ${name==="Home"?"bg-slate-600":" "} rounded-xl`}><a href="#" className='flex items-center gap-5'>
              {icon}
              <span className='text-sm tracking-wider'>{name}</span>
            </a>
             </li>
          )
        })}
      </ul>
      <ul className='flex flex-col border-b-2 border-gray-800'>
        {otherLinks.map(({icon,name})=>{
          return (
            <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 ${name==="Home"?"bg-slate-600":" "}`}><a href="#" className='flex items-center gap-5'>
              {icon}
              <span className='text-sm tracking-wider'>{name}</span>
            </a>
             </li>
          )
        })}
      </ul>
      

      

      
    </div>
  )
}

export default Sidebar
