import React, { useContext } from 'react'
import { LangContext } from '../context/LangContext';

const StaticLang = ({az,en}) => {
    const [lang]=useContext(LangContext);
    
  return (
    <>
        {lang==="AZ"?az:en}
    </>
  )
}

export default StaticLang