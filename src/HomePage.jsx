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
            <h1 className="heading">TodoList App</h1>
            <div>
                <input
                    type="text"
                    value={newValue}
                    onChange={handleInputChange}
                    placeholder=" add new task..."
                />

                <button onClick={handleAdd}>Add</button>
            </div>

            <div className="inputBoxDiv">

                {values.map((value, index) => (
                    <div className="input-wrapper">
                        <div key={index} className="inputbox">
                            <div className="realInput">{value}</div>


                        </div>
                        <button className="rm-btn" onClick={() => handleRemove(index)}>re</button>
                    </div>

                ))}

            </div>


        </>
    );
}
