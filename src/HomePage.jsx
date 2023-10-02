import { useState } from "react";

import IncompleteTask from "./components/IncompleteTask/IncompleteTask";
import CompleteTask from "./components/CompleteTask/CompleteTask";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { GrFormAdd } from "react-icons/gr"
import Filter from "./components/Filter/Filter";


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
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && newValue != []) {
            console.log("added item");
            setValues([...values, newValue]);
            setNewValue("");
        }

    }
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
                    <div className="w-[95%] h-[96%] flex flex-col justify-center items-center">
                        {/* input box */}
                        <div className="flex rounded-lg bg-[#D4E4ED] shadow-md p-1 border mt-2 h-[8%]">
                            <input className="w-[400px] bg-[#D4E4ED] rounded-l-lg outline-none caret-[#FAAFA8]" type="text" value={newValue}
                                onChange={handleInputChange} onKeyDown={handleKeyPress} placeholder="Create new notes..."

                            />

                            {/* <button className=" rounded-md border border-black text-sm font-semibold text-black px-2 hover:text-slate-600 shadow-lg" onClick={handleAdd}>Add</button> */}
                            <GrFormAdd className="rounded-r-lg self-center bg-[#D4E4ED] h-[100%] w-8 cursor-pointer" onClick={handleAdd} />


                        </div>
                        <div className=" mt-1 h-[2%]">
                            <Filter />
                        </div>


                        {/* task card cotainer */}
                        <div className=" w-[95%] h-[90%] flex justify-center items-center">
                            {/* incomplete task */}
                            <IncompleteTask values={values} handleRemove={handleRemove} />
                            {/* complete task */}
                            <CompleteTask />
                        </div>

                    </div>
                    {/* <Footer /> */}
                </div>
            </div>
        </>




    );
}
