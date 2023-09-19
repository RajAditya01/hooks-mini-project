import React from 'react'; // Correct import statement
import { useState } from 'react';

const EventHandling = () => {
    const purple = "#8e44ad";
    const [bg, setBg] =useState(purple);
    const [name, setName] = useState("click Me");

    const bgChange = () => {
        let newBg="#34495e";
        setBg(newBg);
        setName("Ouch!! 🐺");
        //alert('Button clicked!'); // Replace with your desired event handling code
    };

    return (<>
        <div style={ {backgroundColor: bg } }>
            <button onClick={bgChange}>{name}</button> {/* Add onClick event handler */}
        </div>
        </>
    );
}

export default EventHandling;
