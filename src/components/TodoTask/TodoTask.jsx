import React, { useState } from 'react'
import { MdDelete } from "react-icons/md"
import { FaEdit } from "react-icons/fa"
import Masonry from 'react-masonry-css'
import "./custom.css"
import { IoMdColorPalette } from "react-icons/io"
import { FiMoreVertical } from "react-icons/fi"
import { AiOutlineCheckCircle } from "react-icons/ai"
import { BiSolidImageAdd } from "react-icons/bi"


const TodoTask = ({ values, handleRemove, handleAdd }) => {
    const [iseditable, setIsEditable] = useState(false)
    const [isIconVisible, setIsIconVisible] = useState(true)
    const [isMouseOver, setIsMouseOver] = useState(false)

    const breakpoints = {
        default: 2,
        1100: 1,
        700: 1
    }

    const handelHoverIconOut = (index) => {
        setIsMouseOver(false)
    }
    const handleHoverIconOver = (index) => {

        setIsMouseOver(true)
    }

    const handleEditNote = (index) => {
        setIsEditable(true);
    }

    const handleToggleIcon = () => {
        //altering state
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
                            <div key={index} className=" mb-2 shadow-lg rounded-md  overflow-auto cursor-pointer bg-[#D3BFDB] hover:bg-[#dea4f5] w-full  "
                                onMouseOut={handelHoverIconOut} onMouseOver={handleHoverIconOver}
                            >

                                <div className='flex'>

                                    <p className="block w-full text-xl font-bold text-start p-2 rounded-t-md cursor-text truncate focus:outline-none" onClick={handleToggleIcon} contentEditable={iseditable} tabIndex="0" spellCheck="true" aria-multiline="true" style={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}>
                                        {value.title}
                                    </p>

                                </div>

                                <p className='text-start pl-2  focus:outline-none cursor-text' onClick={() => { handleEditNote(); handleToggleIcon(); }} contentEditable={iseditable} tabIndex="0" spellCheck="true" aria-multiline="true" style={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}>{value.note}</p>


                                <div className="flex justify-between w-full h-6">
                                    <div className='flex'>

                                        {/* <FaEdit className="hover:text-[red] mb-1 mt-1 ml-1" onClick={() => {  handleToggleIcon(); }} /> */}
                                        {isIconVisible && <AiOutlineCheckCircle className="hover:text-[green] mt-1" onClick={() => { handleToggleIcon(); handleAdd(); }} />
                                        }
                                    </div>

                                    <div className='flex'>

                                        {isMouseOver && <MdDelete className="hover:text-[red] mt-1 " onClick={() => handleRemove(index)} />}

                                        {isMouseOver && <BiSolidImageAdd className="hover:text-[lavender] mt-1" />}
                                        {isMouseOver && <IoMdColorPalette className="hover:text-[orange] mt-1 " />}
                                        {isMouseOver && <FiMoreVertical className="hover:text-[blue] mt-1" />}


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