import { useState } from "react"

const GeneralComp = (OrginalComp) => {

    const newComp = () => {
        const [acount, setaCount] = useState(0);
        return <OrginalComp incCount={()=>{setaCount((acount)=>acount+1)}}  count={acount}/>
    }

    return newComp;
}

export default GeneralComp