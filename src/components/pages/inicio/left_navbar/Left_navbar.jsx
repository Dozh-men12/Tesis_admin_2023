import React from "react";
import './Left_Navbar.css'
import logo from '../../../../images/tecsup_logo.png';
import Button_navbar from "./buttons_component/Button_navbar";

const Left_Navbar = () =>{
    return(
        <div className="left-navbar">
        <aside>
                <img src={logo} alt="logo-tecsup" id="logo" />                  
                <nav>
                    <ul>
                        <Button_navbar texto="INICIO"></Button_navbar>
                        <Button_navbar texto="INICIO"></Button_navbar>
                        <Button_navbar texto="INICIO"></Button_navbar>
                        <Button_navbar texto="INICIO"></Button_navbar>                        
                    </ul>
                </nav>
        </aside>
    </div>  
    );
};

export default Left_Navbar ;