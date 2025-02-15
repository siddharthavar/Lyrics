import { Error, Loader, SongCard } from "../components";
import {genres} from "../assets/constants";
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const Discover = () => {
const dispatch=useDispatch();
const {activeSong, isPlaying}=useSelector((state)=>state.player);

    const {data, isFetching, error}=useGetTopChartsQuery();
    const  [genrestitle,setGenresTitle]=useState("PoP")
    if(isFetching) return <Loader title="Loading songs..."/>;
    //when the api is working enable this
    // if(error) return <Error/>


  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white">Discover {genrestitle}</h2>
        <select 
        onChange={()=>{}}
        className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
            {genres.map((genre)=>
                
                    <option value={genre.value} key={genre.title} >{genre.title}</option>
                

            )}

        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
            {//change array with data
                /*data?.*/[1,2,3,4,5,6,7,8,9,10].map((song, i)=>(
                    <SongCard key={i} song={song} i={i} 
                    isPlaying={isPlaying} activeSong={activeSong} data={data}/>
                ))
            }

      </div>
    </div>
  )
}

export default Discover

