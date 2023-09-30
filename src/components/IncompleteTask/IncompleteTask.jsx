import React from 'react'
import { MdDelete } from "react-icons/md"
import { FaEdit } from "react-icons/fa"

const IncompleteTask = ({ values, handleRemove }) => {


    return (
        <>
            <div className="border w-[50%] h-[95%] border-slate-300 self-end text-center overflow-auto">
                <p className="border border-black inline-block p-1 sticky top-0 mb-1 bg-[#D3BFDB] shadow-2xl">Incomplete</p>
                <div className="flex gap-2 flex-wrap justify-center items-center truncate ">
                    {values.map((value, index) => (
                        <div key={index} className="flex flex-wrap mb-2 bg-[#E2F6D3] shadow-lg rounded-xl justify-between flex-col overflow-auto  cursor-pointer hover:bg-[#cffaab] min-w-[42%] ">
                            <div className="flex justify-between border-b border-slate-300">
                                <FaEdit className="hover:text-[green] mb-2 mt-2" />
                                <MdDelete className="hover:text-[red] mb-2 mt-2" onClick={() => handleRemove(index)} />
                            </div>
                            <p className="block  max-w-[200px] align-top text-left p-1 cursor-move" style={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}>
                                {value}
                            </p>
                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}

export default IncompleteTask