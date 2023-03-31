import React from "react"
import Auux from "hoc/Auux"
import { useNavigate } from "react-router-dom";

const OrderSummary =(props)=>{
    const navigate = useNavigate();
    const ingredientSummary = Object.keys(props.ingredients)
     .map(igkey =>{
        return <li key={igkey}>
            <span style={{textTransform:'capitalize'}}>{igkey}</span> : {props.ingredients[igkey]}
            </li>
     })
return(
<Auux>
    <h3>your Order</h3>
    <p>A delicious burger with the following ingredients:</p>
    <ul>
       {ingredientSummary} 
    </ul>
    <p><strong>total price:{props.price.toFixed(2)}</strong></p>
    <p>Continue to Checkout?</p>
    <button className="Button Danger" onClick={props.purchaseCancelled}>CANCEL</button>
    <button className="Button Success" onClick={()=>{
        navigate("/Login")
    }}>CONTINUE</button>
</Auux>
    )
};
export default OrderSummary;