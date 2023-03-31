import React from "react"
import Auux from "hoc/Auux"


const layout = (props)=>(
    <Auux>
    
<main className="Content">
    {props.children}
</main>
</Auux>
)

export default layout
