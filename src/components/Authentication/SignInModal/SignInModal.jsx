import React from 'react'
import ReactDOM from 'react-dom'
import { FcGoogle } from "react-icons/fc"
import { BsGithub } from "react-icons/bs"
const SignInModal = ({ setOpenSignInModal }) => {
    return ReactDOM.createPortal(
        <>
            <div className='fixed left-0 top-0 bottom-0 right-0 bg-[rgba(0,0,0,0.3)]'  >
                <div className=' fixed flex justify-center items-center  w-full h-[100vh] z-10 '>
                    <div className="mt-3 space-y-3 border border-black flex flex-col rounded-md shadow-xl w-[45%] h-[50%] bg-[#222E35] justify-center items-center">
                        <div className='border-b border-black w-full p-2 '>
                            <p className='text-center font-bold text-white px-3.5 py-2.5 text-xl'>Sign in</p>
                        </div>

                        <button
                            type="button"
                            className="relative inline-flex  justify-center items-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700  hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black  w-[60%]"
                        >
                            <span className="mr-2 inline-block">
                                <FcGoogle className="h-6 w-6" />
                            </span>
                            Sign up with Google
                        </button>
                        <button
                            type="button"
                            className="relative inline-flex items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none w-[60%]"
                        >
                            <span className="mr-2 inline-block">
                                <BsGithub className="h-6 w-6" />
                            </span>
                            Sign up with Github
                        </button>
                        <div className='border-b border-black p-2 w-full'>
                            <p className='text-center text-white font-sm'>By signing in, you agree to Hannah's terms of service and privacy policy.</p>
                        </div>
                        <div className=' flex justify-center p-3'>
                            <button className='border-2 border-[red] p-1 rounded-md shadow-lg text-[red] font-semibold hover:bg-[red] hover:text-[black] w-20'
                                onClick={() => {
                                    setOpenSignInModal(false)
                                }}
                            >Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>,
        document.querySelector(".signIn")

    )
}

export default SignInModal