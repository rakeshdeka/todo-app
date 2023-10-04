import React, { useState } from 'react'
import { LuListTodo } from "react-icons/lu"


export const Header = () => {
    const [showToolTip, setShowToolTip] = useState();



    const toolTipOut = (e) => {

        setShowToolTip(false)
    }
    const toolTipOver = (e) => {

        setShowToolTip(true)
    }
    return (
        <>
            <div className="flex justify-between border-b border-slate-300 bg-[#F0F0F0] h-[10%] drop-shadow-md">
                <LuListTodo className="text-[#8282f7] max-w-400 w-8 h-8 ml-2 cursor-pointer mt-1" />

                <div className="flex mr-1 bg-slate-600 h-8 mt-2">
                    <button
                        type="button"
                        className="rounded-md self-center bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Signin
                    </button>
                </div>
            </div>

        </>
    )
}
