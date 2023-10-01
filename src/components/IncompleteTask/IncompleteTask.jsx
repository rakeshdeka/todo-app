import React from 'react'
import { MdDelete } from "react-icons/md"
import { FaEdit } from "react-icons/fa"
import Masonry from 'react-masonry-css'
import "./custom.css"


const IncompleteTask = ({ values, handleRemove }) => {
    const breakpoints = {
        default: 3,
        1300: 2,
        700: 1
    }




    return (
        <>
            <div className="border w-[50%] h-[95%] border-slate-300 self-end text-center overflow-auto">
                <p className="border border-black inline-block p-1 sticky top-0 mb-1 bg-[#D3BFDB] shadow-2xl">Incomplete</p>
                <div className="">
                    <Masonry
                        breakpointCols={breakpoints}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                    >


                        {values.map((value, index) => (
                            <div key={index} className=" mb-2 shadow-lg rounded-xl  overflow-auto cursor-pointer bg-[#E2F6D3] hover:bg-[#cffaab] w-full "

                            >

                                <div className="flex justify-between border-b border-slate-300">
                                    <FaEdit className="hover:text-[green] mb-2 mt-2 ml-1" />
                                    <MdDelete className="hover:text-[red] mb-2 mt-2 mr-1" onClick={() => handleRemove(index)} />
                                </div>
                                <p className="block w-full text-start p-1 cursor-move" style={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}>
                                    {value}
                                </p>
                            </div>

                        ))}
                    </Masonry>
                </div >
            </div >
        </>
    )
}

export default IncompleteTask