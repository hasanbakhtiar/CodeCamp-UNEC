import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import UserList from './components/UserList'
import axios from 'axios'

const App = () => {
  const [user,setUser] = useState([]);

  const dataSubmit =(keyword)=>{
    
    axios.get(`https://api.github.com/search/users?q=${keyword}`)
    .then(res=>setUser(res.data.items)
    )
  }
  
  
  return (
    <>
      <Header /> 
      <Search sendKeyword={dataSubmit}/>
      <UserList sendData = {user}/>
    </>
  )
}

export default App