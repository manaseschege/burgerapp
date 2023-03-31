 import React from "react"
 import Backdrop from "components/UI/Backdrop/Backdrop"
 import Auux from "hoc/Auux"
 
 const modal = (props) => (
  <Auux>
    <Backdrop clicked={props.modalClosed} show={props.show}/>
  <div className="Modal"
  style={{
    transform:props.show? 'translateY(0)': 'translateY(-100vh)',
    opacity: props.show? '1': '0'
  }}
  >
    {props.children}
  </div>
  </Auux>
 );

 export default modal;