import React, { useState } from "react";
import Signinlogin from "./Signinlogin";

function Login() {
  const [signin, setsignin] = useState(false);
  return (
    <div className="relative w-full h-screen bg-login bg-no-repeat bg-cover bg-opacity-50  ">
      <div className="flex items-center justify-between">
        <img
          className="h-20 pl-5 pt-3"
          src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png"
          alt=""
        />
        <button
          onClick={() => setsignin(true)}
          className="absolute right-5 lg:mr-10 xl:mr-28   text-white px-4 py-1 bg-red-800 focus:outline-none focus:border-none hover:bg-red-600 duration-300"
        >
          Sign In
        </button>
      </div>

      {/*Gradient */}
      <div className=""> </div>

      {/*Login body */}

      <div className="z-20 text-white p-10 absolute top-[35%]  text-center mx-auto ">
        {signin ? (
          <Signinlogin />
        ) : (
          <>
            <h1 className="text-3xl font-semibold ">
              Unlimited Films,Tv programmes and more
            </h1>
            <h2 className="text-l font-medium ">
              watch anywhere. Cancel at any time
            </h2>
            <h3 className="w-[100vw]">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className=" flex-shrink flex-grow  ">
              <form className="space-y-2">
                <input
                  className="p-1 rounded-sm focus:outline-none focus:border-none text-black h-9 w-[30%] "
                  type="email"
                  placeholder="Email Address"
                />
                <button
                  onClick={() => setsignin(true)}
                  className="p-1 ml-1 bg-red-800 h-9 text-base focus:border-none focus:outline-none cursor-pointer"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
