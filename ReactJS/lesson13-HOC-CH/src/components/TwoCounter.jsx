import React, { useState } from 'react'
import GeneralComp from './GeneralComp';

const TwoCounter = (props) => {
    const {count,incCount} = props;
  return (
    <div>
        Compo  two : {count}
        <button onClick={incCount}>+1</button>
    </div>
  )
}

export default  GeneralComp(TwoCounter);