import React, { useEffect } from 'react'
import Homescreen from './components/Homescreen'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login';
import { auth } from './components/firebase';
import { useDispatch, useSelector } from 'react-redux';
import userSlice, { login, logout, selectUser } from './features/userSlice';
import Profilescreen from './components/Profilescreen';
function App() {
  const user=useSelector(selectUser);
const dispatch =useDispatch();


  useEffect(()=>{
   const unsubscribe =auth.onAuthStateChanged(userAuth=>{
     if(userAuth){
   console.log(userAuth)
   dispatch(login({
     uid:userAuth.uid,
     email:userAuth.email,
   }))

     }else{
   dispatch(logout())
     }
   })
   return unsubscribe;
  },[])
  return (
    
    
    
    <Router> 
      {!user ?(
        <div className="max-w-screen-3xl">
        <Login/>
        </div>):(
          <div className="max-w-screen-3xl mx-auto  bg-black overflow-x-hidden  ">
          <Switch>
          <Route exact path="/">
            <Homescreen/>
          </Route>
          <Route exact path="/profile">
            <Profilescreen/>
          </Route>


        </Switch>  
     </div>
        )}
    </Router>
    
  )
}

export default App
