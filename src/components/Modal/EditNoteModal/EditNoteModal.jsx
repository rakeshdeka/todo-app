import React from 'react'


export const EditNoteModal = () => {
    return (
        <>
            <div className='border border-black w-[50wh] h-[100vh] flex  items-center flex-col'>
                <div className=' h-[60%] w-[30%] flex flex-col overflow-auto rounded-md shadow-xl mt-1'>
                    <div className='border border-black h-[10%] w-[100%] bg-slate-500 resize-none' contentEditable="true" placeholder='Title'></div>
                    <div className='border border-black h-[90%] w-[100%] resize-none ' contentEditable="true" placeholder='Create a Note'></div>



                </div>


            </div>
        </>
    )
}
