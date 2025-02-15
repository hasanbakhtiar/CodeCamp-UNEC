import React, { useMemo, useState } from 'react'
import { users } from '../data/user';

const AppUseMemo = () => {
    const [count,setCount] = useState(0);
    const [email,setEmail] = useState("");
    const userRows = ()=>{
        console.log("user");
        return users.map(item=>(<li onClick={()=>{setEmail(item.email)}} key={item.id}>{item.name}</li>))
    }
    const userRowMemo = useMemo(()=>userRows(),[email]);
  return ( 
    <div>
        {email}
        {userRowMemo}
        {count} <button onClick={()=>{setCount(count+1); console.log('count working');}}>+1</button>
    </div>
  )
}

export default AppUseMemo