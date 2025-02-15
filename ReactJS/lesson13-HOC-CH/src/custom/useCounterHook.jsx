import { useState } from "react";


function useCounterHook(initalValue=0){
    const [count,setCount] = useState(initalValue);
    const increment = ()=>setCount(count+1);
    const decrement = ()=>setCount(count-1);
    const reset = ()=>setCount(0);
    return {count,increment,decrement,reset};
}

export default useCounterHook;