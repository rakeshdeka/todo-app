import React, { useState } from 'react'
import { LuListTodo } from "react-icons/lu"

export const Header = () => {
    const [showToolTip, setShowToolTip] = useState();



    const toolTipOut = (e) => {
        // console.log(`toolTipOut Logout ${e}`);
        // e.target = "Logout"
        // console.dir(e)
        setShowToolTip(false)
    }
    const toolTipOver = (e) => {
        // console.log(`toolTipOver Logout ${e}`);
        // e.target = "Logout"
        // console.dir(e)
        setShowToolTip(true)
    }
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

                    <p className="border border-black block sticky h-[50%] top-0 mb-1 mt-1 bg-[black] text-white font-medium cursor-pointer pl-1 pr-1 rounded-lg text-center hover:text-slate-300" onMouseOut={toolTipOut} onMouseOver={toolTipOver} >Logout</p>
                    {showToolTip && (
                        <div className='absolute top-[20px] bottom-[100px] right-[20px] '>
                            <p className='border text-white bg-black border-black text-xs p-1 rounded-l-xl rounded-b-xl'>Logout</p>
                        </div>

                    )}

                </div>
            </div>

        </>
    )
}
