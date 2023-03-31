import React from "react"
import BuildControl from "components/Burger/BuildControls/BuildControl/BuildControl";

const controls = [
    { label: 'Salad', type:'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'}
];

const buildControls = (props) =>(
    <div className="BuildControls">
        <p>current price:<strong>{props.price.toFixed(2)}</strong></p>
   {controls.map(ctrl =>(
    <BuildControl
    
    key={ctrl.label} 
    label={ctrl.label}
    added={()=>props.ingredientsAdded(ctrl.type)}
    removed ={()=>props.ingredientsRemoved(ctrl.type)}
    disabled={props.disabled[ctrl.type]}
    />
   
    
   ))};
   <button disabled={!props.purchasable} className="OrderButton"
   onClick={props.ordered}
   >ORDER NOW</button>
    </div>
);

export default buildControls;