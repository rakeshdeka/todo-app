import React from 'react'
import { FcGoogle } from "react-icons/fc"
import { BsGithub } from "react-icons/bs"

export const SignOutModal = () => {
    return (
        <>
            <div className='flex justify-center items-center w-full h-[100vh] bg-slate-300'>
                <div className="mt-3 space-y-3 border border-black flex flex-col rounded-md shadow-xl w-[45%] h-[50%] bg-[#222E35] justify-center items-center">
                    <div className='border-b border-black w-full p-2 '>
                        <p className='text-center font-bold text-white px-3.5 py-2.5 text-xl'>rd.rakeshdeka@gmail.com🫰 </p>
                    </div>

                    <button
                        type="button"
                        className="relative inline-flex  justify-center items-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700  hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black  w-[60%]"
                    >
                        <span className="mr-2 inline-block">
                            <FcGoogle className="h-6 w-6" />
                        </span>
                        Sign out
                    </button>
                    <button
                        type="button"
                        className="relative inline-flex items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none w-[60%]"
                    >
                        <span className="mr-2 inline-block">
                            <BsGithub className="h-6 w-6" />
                        </span>
                        Sign out
                    </button>

                    <div className='border-t border-black flex justify-center p-3 w-full'>
                        <button className='border-2 border-[red] p-1 rounded-md shadow-lg text-[red] font-semibold hover:bg-[red] hover:text-[black] w-20'>Cancel</button>
                    </div>
                </div>
            </div>

        </>
    )
}

