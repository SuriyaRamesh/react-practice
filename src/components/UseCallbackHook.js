import React, { useCallback, useState } from "react";

const UseCallbackHook = () => {
    const [count, setCount] = useState(0);
    const handleClick = useCallback(() => {
        console.log("Button clicked!");
        setCount((prevCount) => prevCount+1);
    }, []);
    return (
        <div>
            <h1>useCallbackHook Count: {count}</h1>
            <p><strong>useCallbackHook</strong> - It is useful when the function is used as a prop in a child compoent, and we want to avoid unnecessary re-renders of the child component. It is used to memoize a function and cache it. Reducing the number of times a function needs to be recreated. Takes 2 arguments: 1st - a function, 2nd - array of dependencies that the function depends on. Ensures the function reference remains the same across renders as long as its dependencies don't change.</p>
            <p><strong>useMemo</strong> - used to memoize the result of an expensive computation and cache it. Reducing the number of times the computation needs to be repeated.</p>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default UseCallbackHook;