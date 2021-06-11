import React, { useRef } from "react";
import { auth } from "./firebase";

function Signinlogin() {
  const emailref = useRef(null);
  const passwordref = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailref.current.value,
        passwordref.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  const signin = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(
        emailref.current.value,
        passwordref.current.value
      
    ).then((userAuth) => {
        console.log(userAuth)
    }).catch((e)=>{
        alert(e.message)
    })
  };

  return (
    <div className=" relative max-w-[350px]  p-2 ml-[45px] bg-black sm:ml-40 md:ml-[280px] lg:ml-[450px] xl:ml-[450px] 2xl:ml-[652px] 3xl:ml-[1500px] ">
      <form className=" flex flex-col w-[100%] p-8 pl-5">
        <h1 className="mb-2">Sign In</h1>
        <div className="flex flex-col  space-y-2">
          <input
            ref={emailref}
            className=" p-5 w-[300px] flex-grow rounded-sm  focus:outline-none focus:border-none text-black h-9  "
            type="email"
            placeholder="Email Address"
          />
          <input
            ref={passwordref}
            className="p-5   rounded-sm focus:outline-none focus:border-none text-black h-9 w-[300px] "
            type="password"
            placeholder="Password"
          />
          <button
            onClick={signin}
            className="p-1 ml-1 bg-red-800 h-9 text-base focus:border-none focus:outline-none cursor-pointer"
          >
            Submit
          </button>

          <h4 className="space-x-4">
            <span className="text-gray-400">New to netflix ? </span>
            <span onClick={register} className="cursor-pointer">
              Sign up Now
            </span>
          </h4>
        </div>
      </form>
    </div>
  );
}

export default Signinlogin;
