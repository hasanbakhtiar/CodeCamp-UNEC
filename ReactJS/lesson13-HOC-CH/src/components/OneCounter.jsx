import React, { useState } from 'react'
import GeneralComp from './GeneralComp';

const OneCounter = (props) => {
    const {count,incCount} = props;
  return (
    <div>
        Compo  one : {count}
        <button onClick={incCount}>+1</button>
    </div>
  )
}

export default  GeneralComp(OneCounter);