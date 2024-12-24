import  { useState } from 'react'

const Counter = () => {
  const [count,setCounte] = useState(0);
  
  const increment=()=>{
    setCounte(count+1);
  }
  
  return (
    <div className='mt-5'>
    <button className='btn btn-danger' onClick={()=>{if (count>0) {
      setCounte(count-1)
    }}}>-</button>
    <span className='mx-3'>{count}</span>
    <button className='btn btn-success' onClick={increment}>+</button>
    </div>
  )
}

export default Counter