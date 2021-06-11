import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from './firebase'
import Nav from './Nav'

function Profilescreen() {

    const user=useSelector(selectUser)
    return (
        <div className="h-screen text-white">
            <Nav/>
            {/*body */}
            <div className="flex flex-col w-[50%] mx-auto">
                    <h1 className="font-bold text-2xl border-b mb-5">Edit Profile</h1>
                    <div className="flex">
                        
                    <img className="h-20"
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt=""
          />
                      <div className="ml-5 flex-1 space-y-2">
                          <h2 className="bg-gray-500 p-2 text-base">{user.email}</h2>
                          <div className="profile plans space-y-2">
                            <div className="flex items-center space-x-2 border-b">
                            <h1 className=" ">Plans</h1>
                              <p>(Current Plan:Premium)</p>
                              </div>
                              <button className="focus:border-none focus:outline-none hover:bg-red-800 p-2 text-black bg-[#e50914] w-[100%]" onClick={()=>auth.signOut()}>Signout</button>
                          </div>
                      </div>
                    </div>
            </div>
        </div>
    )
}

export default Profilescreen
