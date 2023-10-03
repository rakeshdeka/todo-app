import React, { useState } from 'react'
import { MdDelete } from "react-icons/md"
import { FaEdit } from "react-icons/fa"
import Masonry from 'react-masonry-css'
import "./custom.css"
import { IoMdColorPalette } from "react-icons/io"
import { FiMoreVertical } from "react-icons/fi"
import { AiOutlineCheckCircle } from "react-icons/ai"


const TodoTask = ({ values, handleRemove, handleAdd }) => {
    const [iseditable, setIsEditable] = useState(false)
    const [isIconVisible, setIsIconVisible] = useState(true)
    const breakpoints = {
        default: 2,
        1100: 1,
        700: 1
    }

    const handleEditNote = (index) => {
        setIsEditable(true);
    }

    const handleToggleIcon = () => {
        setIsIconVisible(!isIconVisible)
    }



    return (
        <>
            <div className="border w-[33.33%] h-[100%] border-slate-300 self-end text-center overflow-auto">
                <p className="border border-black inline-block p-1 sticky top-0 mb-1 bg-[#faafa8] shadow-2xl text-sm">Todos</p>

                <div className="">
                    <Masonry
                        breakpointCols={breakpoints}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                    >


                        {values.map((value, index) => (
                            <div key={index} className=" mb-2 shadow-lg rounded-md  overflow-auto cursor-pointer bg-[#D3BFDB] hover:bg-[#dea4f5] w-full "

                            >


                                <p className="block w-full text-start p-2 rounded-t-md focus:no-underline cursor-text outline-none truncate" onClick={handleToggleIcon} contentEditable={iseditable} tabIndex="0" style={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}>
                                    {value}
                                </p>
                                <div className="flex justify-between">
                                    <div className='flex'>
                                        {isIconVisible ? (
                                            <FaEdit className="hover:text-[red] mb-1 mt-1 ml-1" onClick={() => { handleEditNote(); handleToggleIcon(); }} />
                                        ) : (<AiOutlineCheckCircle className="hover:text-[green] mb-1 mt-1 ml-1" onClick={() => { handleToggleIcon(); handleAdd(index); }} />
                                        )}
                                    </div>

                                    <div className='flex'>
                                        <MdDelete className="hover:text-[red] mb-2 mt-1 mr-1" onClick={() => handleRemove(index)} />
                                        <IoMdColorPalette className="hover:text-[orange] mb-1 mt-1 ml-1" />
                                        <FiMoreVertical className="hover:text-[blue] mb-1 mt-1 ml-1" />

                                    </div>
                                </div>
                            </div>

                        ))}
                    </Masonry>
                </div >
            </div >
        </>
    )
}

export default TodoTask