import react from "react";

let count=0;

const IncNUM = () => {
    console.log("clicked");
};

const App = () =>{
    return (
        <>
        <h1>{count}</h1>
        <button onClick={IncNUM}>Click Me</button>
        </>
    )
};

export default App;




// import React, { useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);

//   const IncNUM = () => {
//     setCount(count + 1);
//   };

//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={IncNUM}>Click Me</button>
//     </>
//   );
// };

// export default App;
