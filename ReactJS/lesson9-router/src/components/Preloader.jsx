import React from 'react'
import { SyncLoader } from 'react-spinners'

const Preloader = () => {
    return (
        <div style={{ height: "70vh", width: "100%" }} className='d-flex align-items-center justify-content-center'>
            <SyncLoader
                margin={4}
                size={30}
            />
        </div>
    )
}

export default Preloader