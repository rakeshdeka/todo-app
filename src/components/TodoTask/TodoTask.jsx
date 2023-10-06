import React, { useState } from 'react'
import { MdDelete } from "react-icons/md"
// import { FaEdit } from "react-icons/fa"
import Masonry from 'react-masonry-css'
import "./custom.css"
import { IoMdColorPalette } from "react-icons/io"
import { FiMoreVertical } from "react-icons/fi"
// import { AiOutlineCheckCircle } from "react-icons/ai"
import { BiSolidImageAdd } from "react-icons/bi"



const TodoTask = ({ values, handleRemove, handleAdd }) => {
    const [isEditable, setIsEditable] = useState(false)
    const [isMouseOver, setIsMouseOver] = useState(false)
    const [hoveredCardIndex, setHoveredCardIndex] = useState(null);



    const breakpoints = {
        default: 2,
        1100: 1,
        700: 1
    }

    const handleHoverIconOver = (index) => {
        setIsMouseOver(true)
        setHoveredCardIndex(index);
    }

    const handelHoverIconOut = () => {
        setIsMouseOver(false)
    }
    const handleEditNote = (index) => {

        setIsEditable(true);
        setHoveredCardIndex(index);

    }
    console.log(hoveredCardIndex);






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
                            <div key={index} className=" mb-2 shadow-lg rounded-lg  overflow-auto cursor-pointer bg-[#D3BFDB] hover:bg-[#dea4f5] w-full  "
                                onMouseOut={() => handelHoverIconOut(index)} onMouseOver={() => handleHoverIconOver(index)}

                            >

                                <div className='flex'>

                                    <p className={`block w-full p-2 text-xl font-bold truncate text-start rounded-t-md cursor-text focus:outline-none 
                                    ${isEditable && hoveredCardIndex === index ? 'editable' : ''}`}
                                        contentEditable={isEditable && hoveredCardIndex === index} // Make title editable
                                        suppressContentEditableWarning={true} // Suppress React warning


                                        tabIndex="0"
                                        spellCheck="true"
                                        aria-multiline="true"
                                        style={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}
                                    >
                                        {value.title}
                                    </p>

                                </div>

                                <p className={`pl-2 text-start focus:outline-none cursor-text
                                 ${isEditable && hoveredCardIndex === index ? 'editable' : ''}`}
                                    contentEditable={isEditable && hoveredCardIndex === index} // Make title editable
                                    suppressContentEditableWarning={true} // Suppress React warning
                                    onClick={() => { handleEditNote(index); }}

                                    // contentEditable={iseditable}
                                    tabIndex="0" spellCheck="true"
                                    aria-multiline="true"
                                    style={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}>
                                    {value.note}
                                </p>


                                <div className="flex justify-end w-full h-6 cursor-text">
                                    {/* {isEditable && hoveredCardIndex === index && <div className='flex'>


                                        <AiOutlineCheckCircle className="hover:text-[green] mt-1 cursor-pointer" title='add changes' onClick={() => { handleAdd(index); }} />

                                    </div>} */}

                                    {isMouseOver && hoveredCardIndex === index && <div className='flex gap-2'>

                                        <MdDelete className="hover:text-[red] mt-1 cursor-pointer" title="delete" onClick={() => handleRemove(index)} />

                                        <BiSolidImageAdd className="hover:text-[lavender] mt-1 cursor-pointer" title='add image' />
                                        <IoMdColorPalette className="hover:text-[orange] mt-1 cursor-pointer" title='add color' />
                                        <FiMoreVertical className="hover:text-[blue] mt-1 cursor-pointer" title='more' />


                                    </div>}



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