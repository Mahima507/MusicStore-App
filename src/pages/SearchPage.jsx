import { useEffect, useState } from "react";
import { Search } from "../components/Search";
import {Songs} from "../components/Songs";
import { getSongs } from "../services/api-client";
import { Player } from "../components/Player";

export const SearchPage = ()=>{
   const [allSongs, setSongs] = useState([]);
   //component life cycle 
   const [flag, setFlag] = useState(false);
   const [song, setPlayerSong] = useState(null);

   const loadSongs = async()=>{

    setSongs( await getSongs('Latest Songs'));  
   }
   useEffect(()=>{
     loadSongs();
    },[])

  const togglePlayer = (flag, songarg) => {
    console.log('Flag',flag,'song object ',songarg);
    setPlayerSong(songarg);
   setFlag(flag);
  }

   const getArtistNmae = async (artistName)=>{
       console.log('REC artist name',artistName);
       setSongs( await getSongs(artistName));  
    }
    const jsx = <>  <Search fn = {getArtistNmae}/>
    <Songs fn ={togglePlayer} allSongs = {allSongs}/></>;
   
   return(   
    <div className='container'>
        <h1 className='alert alert-info text-center'>Music Store</h1>
    {flag?<Player fn ={togglePlayer} song = {song}/>:jsx}
    </div>
    );
}