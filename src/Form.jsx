import React from "react";
import { useState } from "react";

const Form = () => {
    let [inputValue, setValue] = useState(" ")

    const inputEvent = (event) => {
        // console.log(event.target.value)
        inputValue = event.target.value
    }

    const Submit = () => {
        setValue(inputValue)
    }
    return (
        <>
            <div className="Dcontainer">
                <h1 className="heading"> Hello, {inputValue}</h1>
                <input
                    type="text"
                    style={{ height: "50px", width: "350px", marginBottom: "20px", textAlign: 'center' }}
                    placeholder="Enter Your Name" onChange={inputEvent}
                />
                <button className="primary__btn" onClick={Submit}>Submit</button>
            </div>
        </>
    );
};

export default Form;