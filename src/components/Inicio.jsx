import React from "react";
import '../stylesheets/Inicio.css';
import logo from '../images/tecsup_logo.png';
import Button_navbar from "./buttons_component/Button_navbar";

function Inicio(){
    return(        
        <div className="inicio-container">         

        <div className="left-navbar"></div>  
     
            <aside>
                <img src={logo} alt="logo-tecsup" id="logo" />                  
                <nav>
                    <ul>
                        <Button_navbar texto="INICIO"></Button_navbar>
                        <Button_navbar texto="INICIO"></Button_navbar>
                        <Button_navbar texto="INICIO"></Button_navbar>
                        <Button_navbar texto="INICIO"></Button_navbar>
                        {/* <button><li>Inicio</li></button><br />
                        <button><li>Horarios</li></button><br />
                        <button><li>Datos</li></button> */}
                    </ul>
                </nav>
            </aside>

        
           
           {/*  <div className="navbar-header">                
                <img src={logo} alt="logo-tecsup" id="logo" />                    
                
                Este es el navbar main
            </div> */}
            
            
        </div>
    );
};

export default Inicio ;