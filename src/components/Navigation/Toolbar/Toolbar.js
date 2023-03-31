import React from "react"
import {Routes,Route,Link} from "react-router-dom"
import Contacts from "components/Navigation/Contacts"
import Login from "components/Navigation/Login"
import BurgerBuilder from "containers/BurgerBuilder/BurgerBuilder"
import Layout from "components/Layout/Layout"
const toolbar =()=>{
    
    return(
        <div>
            <header className="Toolbar">
            <Link active className="Link" to="/">Home</Link>
            <nav>
            <Link className="Link" to="/Contacts">Contacts</Link>
            <Link className="Link" to="/About">About</Link>
            
            </nav>
            
            </header>
            
        
   

    <Routes>
        <Route exact path="/" element={<Layout><BurgerBuilder/></Layout>}/>
        <Route path="/Contacts" element={<Contacts/>}/>
        <Route path="/Login" element={<Login/>}/>
    </Routes>
        </div>
    );
}

export default toolbar;