import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const MyInput = forwardRef((props,ref)=>{
    useImperativeHandle(ref,()=>({
        myFunc:handleClick
    }))
    const handleClick = ()=>{
        alert('clicked')
    }
    return (<input type="text" />)
} )


const AppUseImpertaiveHandle = () => {
    const inputRef = useRef();
    const myClick = ()=>{
            inputRef.current.myFunc();
    }
  return (
    <div>
        <MyInput ref={inputRef} /><button onClick={myClick}>add</button>
    </div>
  )
}

export default AppUseImpertaiveHandle