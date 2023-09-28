
import { useState } from "react";
import rmIcon from "./assets/delete_black_24dp.svg"
import editIcon from "./assets/edit_black_24dp.svg"
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
            <div className="border h-[100vh] border-black bg-[#F0F0F0] flex flex-col justify-center items-center">
                <h1 className="text-center">Todo List</h1>

                <div className="border w-[95%] h-[95%] border-red-300 flex flex-col justify-center items-center">
                    <div className="flex gap-2">
                        <input className=" bg-orange-300 " type="text" value={newValue}
                            onChange={handleInputChange} placeholder=" add new task..."
                        />
                        <button className=" border border-black hover:bg-black hover:text-white" onClick={handleAdd}>add</button>
                    </div>
                    <div className="border w-[95%] h-[90%] border-yellow-300 flex justify-center items-center">

                        <div className="border w-[50%] h-[95%] border-black self-end text-center overflow-auto">
                            <p className="border border-black inline-block p-1 sticky top-0 mb-1">Incomplete</p>
                            <div className="flex gap-2 flex-wrap justify-center items-center truncate">
                                {values.map((value, index) => (
                                    <div key={index} className="flex flex-wrap mb-2 bg-[#E2F6D3] shadow-lg rounded-xl justify-between flex-col overflow-auto">
                                        <div className="flex justify-between border-b border-slate-600">
                                            <img src={editIcon} alt="editIcon" className=" mt-2 w-[30%] min-h-[30%] mb-4 mr-2 cursor-pointer" />
                                            <img src={rmIcon} alt="rmIcon" className=" mt-2 w-[30%] min-h-[30%] mb-4 mr-2 cursor-pointer" onClick={() => handleRemove(index)} />
                                        </div>
                                        <p className="block  max-w-[200px] align-top text-left p-1" style={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}>
                                            {value}
                                        </p>
                                    </div>







                                ))}
                            </div>
                        </div>
                        <div className="border w-[50%] h-[95%] border-black self-end text-center overflow-auto">
                            <p className="border border-black inline-block p-1 sticky top-0 mb-1">Complete</p>


                        </div>
                    </div>
                </div>
            </div>



        </>
    );
}
