import React from "react"

const buildControl =(props)=>(
    
  
    <div className="BuildControl">
        
        <div className="Label">{props.label}</div>
        
        <button disabled={props.disabled} className="Less" onClick={props.removed}>less</button>
        <button  className="More" onClick={props.added}>more</button>
        
    </div>

)
export default buildControl;