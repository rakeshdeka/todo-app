
import { useState } from "react";
import hero from "./assets/hero.png"

import { MdDelete } from "react-icons/md"
import { FaEdit } from "react-icons/fa"
import { AiOutlineLogout } from "react-icons/ai"
import { LuListTodo } from "react-icons/lu"
import { CgProfile } from "react-icons/cg"
export default function HomePage() {
    const [values, setValues] = useState([]);
    const [newValue, setNewValue] = useState("");

    const handleInputChange = (event) => {
        setNewValue(event.target.value);
    };

    const handleAdd = () => {
        if (newValue !== "") {
            setValues([...values, newValue]);
            setNewValue("");
        }
    };
    const handleRemove = (index) => {
        const newValues = [...values];
        newValues.splice(index, 1);
        setValues(newValues);
    };

    return (
        <>
            <div className=" h-[100vh]">
                {/* header */}
                <div className="flex justify-between border-b border-slate-300 bg-[#F0F0F0] h-[8%]">
                    <LuListTodo className="text-[#8282f7] max-w-400 w-8 h-8 ml-2 cursor-pointer mt-1" />
                    {/* <p className=" font-sans font-semibold underline underline-offset-2 decoration-[teal]">Todo List</p> */}
                    <div className="flex mr-1 gap-2">
                        {/* <CgProfile className="w-8 h-8 mr-2 cursor-pointer " /> */}
                        {/* <img className=" cursor-pointer " src={hero} alt="hero" /> */}
                        <img
                            className="inline-block h-10 w-10 rounded-full mt-1 cursor-pointer"
                            src="https://pbs.twimg.com/profile_images/1707600901932769280/oL5BxJOU_400x400.jpg"
                            alt="Dan_Abromov"
                        />

                        <p className="border border-black block sticky h-[50%] top-0 mb-1 mt-2 bg-[black] text-white font-medium cursor-pointer pl-1 pr-1 rounded-lg text-center hover:text-slate-300">Logout</p>
                    </div>
                </div>
                {/* //need div */}
                {/* first container */}
                <div className="h-[90%] bg-[#F0F0F0] flex flex-col justify-center items-center">
                    {/* second container */}
                    <div className="w-[95%] h-[95%] flex flex-col justify-center items-center">
                        {/* input box */}
                        <div className="flex gap-2">
                            <input className="w-[400px] p-2 rounded-md border border-gray-300 shadow-md outline-none  caret-[#FAAFA8]" type="text" value={newValue}
                                onChange={handleInputChange} placeholder=" add new task..."
                            />
                            <button className=" rounded-md border border-black text-sm font-semibold text-black px-2 hover:text-slate-600 shadow-lg" onClick={handleAdd}>Add</button>
                        </div>
                        {/* task card cotainer */}
                        <div className=" w-[95%] h-[90%] flex justify-center items-center">
                            {/* incomplete task */}
                            <div className="border w-[50%] h-[95%] border-slate-300 self-end text-center overflow-auto">
                                <p className="border border-black inline-block p-1 sticky top-0 mb-1 bg-[#D3BFDB] shadow-2xl">Incomplete</p>
                                <div className="flex gap-2 flex-wrap justify-center items-center truncate">
                                    {values.map((value, index) => (
                                        <div key={index} className="flex flex-wrap mb-2 bg-[#E2F6D3] shadow-lg rounded-xl justify-between flex-col overflow-auto  cursor-pointer hover:bg-[#cffaab]"
                                            draggable={true}
                                            onDragStart={e => console.log('onDragStart')}
                                            onDragEnd={e => console.log('onDragEnd')}

                                        >
                                            <div className="flex justify-between border-b border-slate-300">

                                                {/* <img src={editIcon} alt="editIcon" className=" mt-2 w-[30%] min-h-[30%] mb-4 mr-2 cursor-pointer" /> */}
                                                <FaEdit className="hover:text-[green] mb-2 mt-2" />
                                                <MdDelete className="hover:text-[red] mb-2 mt-2" onClick={() => handleRemove(index)} />
                                                {/* <img src={rmIcon} alt="rmIcon" className=" mt-2 w-[30%] min-h-[30%] mb-4 mr-2 cursor-pointer" onClick={() => handleRemove(index)} /> */}
                                            </div>
                                            <p className="block  max-w-[200px] align-top text-left p-1 cursor-move" style={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}>
                                                {value}
                                            </p>
                                        </div>

                                    ))}
                                </div>
                            </div>

                            {/* complete task */}
                            <div className="border w-[50%] h-[95%] border-slate-300 self-end text-center overflow-auto"
                                onDragEnter={e => console.log('onDragEnter')}
                                onDragLeave={e => console.log('onDragLeave')}
                                onDragOver={e => { e.preventDefault(); console.log('onDragOver'); }}
                                onDrop={e => console.log('onDrop')}
                            >
                                <p className="border border-black inline-block p-1 sticky top-0 mb-1 bg-[#B4DDD3] shadow-2xl">Complete</p>


                            </div>

                        </div>

                    </div>
                    <p >Made with ❤️ by <a className="underline decoration-[blue]" href="https://github.com/rakeshdeka">Rakesh</a> </p>


                </div>
            </div>
        </>




    );
}
