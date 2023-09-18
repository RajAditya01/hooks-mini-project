// import react from "react";

// let count=0;

// const IncNUM = () => {
//     count++;
//     console.log("clicked");
// };

// const App = () =>{
//     return (
//         <>
//         <h1>{count}</h1>
//         <button onClick={IncNUM}>Click Me</button>
//         </>
//     )
// };

// export default App;


//increment
// import React, { useState } from "react";
// const App = () => {
//     const [count, setCount] = useState(0);

//     const IncNUM = () => {
//         setCount(count + 1);
//     };

//     return (
//         <>
//             <h1>{count}</h1>
//             <button onClick={IncNUM}>Click Me</button>
//         </>
//     );
// };

// export default App;


//increment + decrement
// import React, { useState } from "react";

// const App = () => {
//     const [count, setCount] = useState(0);

//     const increment = () => {
//         setCount(count + 1);
//     };

//     const decrement = () => {
//         setCount(count - 1);
//     };

//     return (<>
//             <h1>{count}</h1>
//             <button onClick={increment}>Increment</button>
//             <button onClick={decrement}>Decrement</button>
//         </>
//     );
// };

// export default App;


//challenges
// import React, { useState } from "react";

// const App = () => {
//     const [currentTime, setCurrentTime] = useState("");

//     const getTime = () => {
//         const currTime = new Date().toLocaleTimeString();
//         setCurrentTime(currTime);
//     };

//     return (
//         <>
//             <h1>{currentTime}</h1>
//             <button onClick={getTime}>GET TIME</button>
//         </>
//     );
// };

// export default App;


//creating a digital project
import React, { useState, useEffect } from "react";

const App = () => {
    // Initialize the state with the current time
    const [ctime, setCtime] = useState(new Date().toLocaleTimeString());

    // Use useEffect to update the time every second
    useEffect(() => {
        const interval = setInterval(() => {
            // Update the time in the state
            setCtime(new Date().toLocaleTimeString());
        }, 1000); // Update every 1000 milliseconds (1 second)

        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <h1>{ctime}</h1>
        </>
    );
};

export default App;
