import { useState } from "react";

import TodoTask from "./components/TodoTask/TodoTask";
import CompleteTask from "./components/CompleteTask/CompleteTask";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { GrFormAdd } from "react-icons/gr"
import Filter from "./components/Filter/Filter";
import InProgress from "./components/InProgress/InProgress";


export default function HomePage() {
    const [values, setValues] = useState([]);
    const [newValue, setNewValue] = useState("");
    // const [title, setTitle] = useState({})
    const [visibleTitle, setVisibleTitle] = useState(false)
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
    const handleVisibility = () => {

        setVisibleTitle(true)
    }
    const closeTitle = () => {
        setVisibleTitle(!visibleTitle)
    }


    return (
        <>
            <div className=" h-[100vh]" >
                {/* header */}
                <Header />
                {/* //need div */}
                {/* first container */}
                <div className="h-[90%] bg-[#F0F0F0] flex flex-col justify-center items-center">
                    {/* second container */}
                    <div className="w-[100%] h-[96%] flex flex-col justify-center items-center ">
                        {/* input box */}
                        <div className="h-[30%] flex flex-col items-center w-full">
                            <div className="flex rounded-lg bg-[#D4E4ED] shadow-md p-1 border mt-2 min-h-[20%]">
                                <div className="flex flex-col h-[70%]">
                                    {visibleTitle && <input className="w-[400px] min-h-[40%] bg-[#D4E4ED] rounded-l-lg outline-none" type="text" placeholder="title" />}
                                    <textarea className=" bg-[#D4E4ED] w-[400px] outline-none resize-none overflow-hidden h-auto" placeholder="create a note" type="text" value={newValue}
                                        onChange={handleInputChange} onKeyDown={handleKeyPress} onClick={handleVisibility} onDoubleClick={closeTitle} />
                                </div>

                                {/* <button className=" rounded-md border border-black text-sm font-semibold text-black px-2 hover:text-slate-600 shadow-lg" onClick={handleAdd}>Add</button> */}
                                <GrFormAdd className="rounded-r-lg self-center bg-[#D4E4ED] h-[100%] w-8 cursor-pointer" onClick={handleAdd} />

                            </div>
                            <div className=" mt-1">
                                <Filter />
                            </div>
                        </div>


                        {/* task card cotainer */}
                        <div className=" w-[95%] h-[80%] flex justify-center items-center">
                            {/* incomplete task */}
                            <TodoTask values={values} handleRemove={handleRemove} />
                            {/* inprogress */}
                            <InProgress />
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
