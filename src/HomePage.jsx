import "./homePage.css";
import { useState } from "react";
export default function HomePage() {
    const [values, setValues] = useState([]);
    const [newValue, setNewValue] = useState("");

    const handleInputChange = (event) => {
        setNewValue(event.target.value);
    };

    const handleAddValue = () => {
        if (newValue !== "") {
            setValues([...values, newValue]);
            setNewValue("");
        }
    };
    // console.log(values);
    // console.log(newValue);

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

                <button onClick={handleAddValue}>Add</button>
            </div>
            <div className="inputBoxDiv">

                {values.map((value, index) => (
                    <p className="inputbox" key={index}>
                        {value}
                    </p>

                ))}

            </div>

        </>
    );
}
