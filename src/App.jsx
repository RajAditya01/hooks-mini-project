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
import React, { useState } from "react";

const App = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (<>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    );
};

export default App;
