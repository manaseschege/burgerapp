import React,{useState} from "react"
import axios from 'axios'
 const Login=()=>{
   const [value,setValue] = useState({
    username:"",
    email:"",
    password:"",
    confirmPassword:""
   });
   const [error,setError] = useState({})

   const handleErrors = (value)=>{
    let errors={}
     if(value.username.length<4){
      errors.username= "username should be more than 4 characters"
     }
      else if(value.username.length>15){
        errors.username= "username shouldn't  exceed 15 characters"
      }
      if(value.password!==value.confirmPassword){
          errors.confirmPassword= "Please check your password!"
      }

      return errors;

   }
   
   const handleChange = (e)=>{
    setValue({...value,[e.target.name]:e.target.value})
   }
   const handleSubmit = (e)=>{
     e.preventDefault();
     setError(handleErrors(value))
   }
  const SubmitForm =()=>{   
  
     axios.post("https://eccomerce-32255-default-rtdb.firebaseio.com/contact.json",value)
     .then(res=> console.log(res.config.data))
     .catch(error=>error.message)
 
    }
    return(
<div className="fom">
< form className="Form" onSubmit={handleSubmit}>
    <label>Username</label>
         <input
         required
         onChange={handleChange}
         value={value.username}
         type="text" 
         name="username"/>
         {error.username && <p className="errors">{error.username}</p>}
    <label>Email</label>
         <input
         required
         onChange={handleChange}
         value={value.email}
         type="email" 
         name="email"/>
    <label>Password</label>
         <input
         required
         onChange={handleChange}
         value={value.password}
         type="text" 
         name="password"/>
    <label>Confirmpassword</label>
         <input
         required
         onChange={handleChange}
         value={value.confirmPassword}
         type="text" 
         name="confirmPassword"/>
         {error.confirmPassword && <p className="errors">{error.confirmPassword}</p>}
   <button className="button" onClick={SubmitForm}>SEND</button>
 </form>

      
    
</div>
    )
 };
 export default Login;