import React, { useEffect, useState } from "react";
import requests from "./Request";
import axios from"./axios";
function Bannner() {

  const[movie,setmovie]=useState([]);

  useEffect(() =>{
  async function fetchdata(){
    try{
   const request=await axios.get(requests.fetchNetflixOriginals); 
   setmovie(request.data.results[
     Math.floor(Math.random()* request.data.results.length-1)
   ]) ;
   
  }
catch(e){
    console.log(e.message);
  }
}
  fetchdata();
  },[]);
  console.log(movie);
  return (
    <div className="h-[448px] w-screen relative object-contain text-white"
      style={{
        
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,

        backgroundPosition: "center center,",
      }}
    >
        
       <div className=" space-y-1 ml-16 pt-[240px] md:ml-20 md:pt-[240px] absolute text-white">
           <h1 className="font-extrabold text-5xl">{movie?.title ||movie?.original_name ||movie?.name}</h1>
           <div className="flex items-center">
               <button className="bannerbutton">Play</button>
               <button className="bannerbutton">My List</button>
           </div>
           <h1 className="line-clamp-2 w-[50%]"> {movie?.overview}
           </h1>

           </div>

           {/**Gradeint */}
           <div style={{height: "448px",
           backgroundImage: "linear-gradient(180deg,transparent,rgba(37, 37, 37, 0.61),#111"}}></div> 

    </div>
  );
}

export default Bannner;
