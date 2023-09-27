import "./homePage.css";
import { useState } from "react";
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
            <h1 className="bg-slate-300">TodoList App</h1>
            <div>
                <input
                    type="text"
                    value={newValue}
                    onChange={handleInputChange}
                    placeholder=" add new task..."
                />
            </div>
            <button onClick={handleAdd}>Add</button>
            <div class="flex bg-lightgray justify-around flex-grow-5">
                <div class="border-black border sub-container w-1/2 h-96 overflow-auto p-10 font-bold">
                    <div className="">

                        {values.map((value, index) => (
                            <div className="">
                                <div key={index} className="">
                                    <div className="">{value}</div>


                                </div>
                                <button className="" onClick={() => handleRemove(index)}>remove</button>
                            </div>

                        ))}

                    </div>
                </div>
                <div class="sub-container w-1/2" id="right-container">
                    {/* <!-- Drop some color on me --> */}
                </div>
            </div>



        </>
    );
}
