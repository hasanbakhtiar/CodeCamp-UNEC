import {useState,useLayoutEffect,useEffect} from 'react'

const AppUseLayoutEffect = () => {
  const [colorOne, setColorOne] = useState("green");
const [colorTwo, setColorTwo] = useState("green");

  
  useEffect(() => {
    setColorOne("orange"); 
  }, [colorOne]);

  useLayoutEffect(() => {
    setColorTwo("red"); 
  }, [colorTwo]);

  return (
    <div>
    <div style={{"backgroundColor":colorOne,"width":"200px","height":"200px"}}></div>
     <div style={{"backgroundColor":colorTwo,"width":"200px","height":"200px"}}></div>

    </div>
  )
}

export default AppUseLayoutEffect
