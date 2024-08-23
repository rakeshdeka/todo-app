import React, { useState } from "react";
import { LuListTodo } from "react-icons/lu";

export const Header = ({ setOpenSignInModal }) => {
  return (
    <>
      <div className="border-b flex justify-center items-center border-slate-300 bg-[#F0F0F0] h-[10%] drop-shadow-md">
       
        <p className=" text-2xl font-bold"> TODO <span className=" text-red-500">APP</span> </p>
        {/* 
                <div className="flex h-8 mt-2 mr-1 bg-slate-600">
                    <button
                        type="button"
                        className="self-center px-3 py-2 text-sm font-semibold text-white bg-black rounded-md shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        title='Signin with google'
                        onClick={() => {
                            setOpenSignInModal(true)
                        }}

                    >
                        Signin
                    </button>

                </div> */}
      </div>
    </>
  );
};
