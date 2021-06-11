import React, { useEffect, useState } from "react";
import axios from "../components/axios";
function Row({ title, fetchUrl ,isLargeRow}) {
const baseUrl="https://image.tmdb.org/t/p/original/"
const[movie,setmovies]=useState([]);

useEffect(() =>{
async function fetchdata(){
    const request=await axios.get(fetchUrl);
    setmovies(request.data.results);
    return request;
}
fetchdata();

},[fetchUrl])
console.log(movie);

  return (
    <div
      className="ml-5 mb-2  ">
           <h2 className="text-white font-medium text-2yarnxl">{title}</h2>
        <div className="space-x-2 flex items-center overflow-x-scroll scrollbar-hide overflow-y-hidden  p-1">
         
          {movie.map(movie =>(
              <img  className={`h-32 object-contain w-screen duration-500 cursor-pointer hover:transform hover:scale-110 hover:bg-opacity-100:     ${isLargeRow && "h-[250px]"}`} key={movie.id} src={`${baseUrl}${isLargeRow  ? movie?.poster_path:movie?.backdrop_path} `} alt="moviename"/>
          ))}
          </div>
      </div>
  );
}

export default Row;
