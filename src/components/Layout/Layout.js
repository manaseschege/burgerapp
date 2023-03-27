import React from "react"
import Auux from "hoc/Auux"


const layout = (props)=>(
    <Auux>
<div>Toolbar,sideDrawer,Backdrop</div>
<main className="Content">
    {props.children}
</main>
</Auux>
)

export default layout
