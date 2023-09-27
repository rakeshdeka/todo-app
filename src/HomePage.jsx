
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
            <div className="border h-[100vh] border-black bg-slate-400 flex flex-col justify-center items-center">
                <h1 className="text-center">Todo List</h1>
                <div className="border w-[95%] h-[95%] border-black flex justify-center items-center">
                    <div className="border w-[50%] h-[95%] border-black "></div>
                    <div className="border w-[50%] h-[95%] border-black"></div>
                </div>
            </div>



        </>
    );
}
