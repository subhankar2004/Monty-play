import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import ParseData from "../../Utility/ParseData";

window.process = {
  env: {
    NODE_ENV: 'development', // or 'production'
    REACT_APP_YOUTUBE_DATA_API_KEY: 'AIzaSyCPlwYne9uK9s39LWb6OJ_xgarFdqfZ5dI'
  }
};
const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;

export const getHomePageVideos = createAsyncThunk(
    "youtube/App/searchPageVideos",
    async(isNext,{getState}) => {
        const {
            youtubeApp : {nextPageToken : nextPageTokenFromState,videos},
        } = getState();
        const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q="drop x out"&key=${API_KEY}&part=snippet&type=video`);
        
        const items=response.data.items;
        console.log(items);

        const parseData =await parseData(items);
    }
)