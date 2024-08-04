import {createSlice} from '@reduxjs/toolkit';
import { getHomePageVideos } from '../../store/Reducers/GetHomePageVideos';

const initialState = {
  video:[],
  currentPlaying:null,
  searchTerm:"",
  searchResult:[],
  nextPageToker:null,
  recommenderVideos:[]
};

const youtubeSlice=createSlice({
  name:"youtubeApp",
  initialState,
  reducer:{

  },
  extraReducers:(builder)=>{
    builder.addCase(getHomePageVideos.fulfilled,(state,action)=>{

    })
  }
})

export default youtubeSlice.reducer