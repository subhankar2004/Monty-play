import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import { useAppDisptch,useAppSelector } from '../hooks/UseApp'
import { getHomePageVideos } from '../store/Reducers/GetHomePageVideos'

const Home = () => {
const dispatch=useAppDisptch();
const videos=useAppSelector((state)=>{state.youtubeApp.videos});

useEffect(()=>{
  dispatch(getHomePageVideos(false));
},[dispatch])

  return (
    <div>
      <Navbar/>
      <Sidebar/>
    </div>
  )
}

export default Home
