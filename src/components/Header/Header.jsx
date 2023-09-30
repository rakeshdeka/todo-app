import React from 'react'
import { LuListTodo } from "react-icons/lu"

export const Header = () => {
    return (
        <>
            <div className="flex justify-between border-b border-slate-300 bg-[#F0F0F0] h-[8%] drop-shadow-md">
                <LuListTodo className="text-[#8282f7] max-w-400 w-8 h-8 ml-2 cursor-pointer mt-1" />

                <div className="flex mr-1 gap-2">

                    <img
                        className="inline-block h-10 w-10 rounded-full mt-1 cursor-pointer"
                        src="https://pbs.twimg.com/profile_images/1707600901932769280/oL5BxJOU_400x400.jpg"
                        alt="Dan_Abromov"
                    />

                    <p className="border border-black block sticky h-[50%] top-0 mb-1 mt-2 bg-[black] text-white font-medium cursor-pointer pl-1 pr-1 rounded-lg text-center hover:text-slate-300">Logout</p>
                </div>
            </div>

        </>
    )
}
