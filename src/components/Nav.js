import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

function Nav() {

const[show , handleshow]=useState(false);
const history=useHistory();
const transitionNavbar=()=>{

    if(window.scrollY>100){
        handleshow(true);
    }
    else{
        handleshow(false)
    }
}
useEffect(()=>{
    window.addEventListener("scroll",transitionNavbar);
    return()=>{
        window.removeEventListener("scroll",transitionNavbar);
    }
},[]);
    return (
        <div className={` flex flex-grow flex-shrink fixed top-0 p-[20px] h-[80px] w-[100%] z-50 duration-500 transition-all ${show && "blacknav"} `}>
            <div className="flex items-center justify-between">
            <img onClick={()=> history.push("/")} className=" cursor-pointer w-36 top-0  left-8 fixed md:left-12"src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png" alt=""/>
           <div  className="hover:animate-bounce fixed right-5 top-5 cursor-pointer ">
           <Avatar onClick={()=> history.push("/profile")}/>
           </div>
           
           </div>
        </div>
    )
}

export default Nav
