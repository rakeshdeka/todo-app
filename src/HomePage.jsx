import { useState } from "react";

import IncompleteTask from "./components/IncompleteTask/IncompleteTask";
import CompleteTask from "./components/CompleteTask/CompleteTask";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

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
                <Header />
                {/* //need div */}
                {/* first container */}
                <div className="h-[90%] bg-[#F0F0F0] flex flex-col justify-center items-center">
                    {/* second container */}
                    <div className="w-[95%] h-[95%] flex flex-col justify-center items-center">
                        {/* input box */}
                        <div className="flex gap-2">
                            <input className="w-[400px] p-2 rounded-md border border-gray-300 shadow-md outline-none  caret-[#FAAFA8]" type="text" value={newValue}
                                onChange={handleInputChange} placeholder="Create new notes..."
                            />
                            <button className=" rounded-md border border-black text-sm font-semibold text-black px-2 hover:text-slate-600 shadow-lg" onClick={handleAdd}>Add</button>
                        </div>
                        {/* task card cotainer */}
                        <div className=" w-[95%] h-[90%] flex justify-center items-center">
                            {/* incomplete task */}
                            <IncompleteTask values={values} handleRemove={handleRemove} />
                            {/* complete task */}
                            <CompleteTask />
                        </div>

                    </div>
                    <Footer />
                </div>
            </div>
        </>




    );
}
