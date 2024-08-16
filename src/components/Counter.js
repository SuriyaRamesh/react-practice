import React, { useState } from "react";





const Counter = () => {

    const [count, setCount] = useState(0);

    return (
        <h1>{count}<button onClick={() => setCount(count+1)}>Count</button></h1>
    );
}

export default Counter;