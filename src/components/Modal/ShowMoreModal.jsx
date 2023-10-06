import React from 'react'
import { RxCross2 } from "react-icons/rx"

export const ShowMoreModal = () => {
    return (
        <>
            <div className='border border-black h-30 w-28 m-1 rounded-lg flex flex-col'>
                <RxCross2 className='self-end cursor-pointer mr-1 hover:text-[red]' />
                <p className='h-[33.33%] border-b border-t border-black text-sm cursor-pointer hover:bg-slate-300'>Delete</p>
                <p className='h-[33.33%] border-b border-black text-sm cursor-pointer hover:bg-slate-300'>Add label</p>
                <p className='h-[33.33%] text-sm cursor-pointer hover:bg-slate-300'>Add Checkboxes</p>

            </div>
        </>
    )
}
