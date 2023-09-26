import React from "react";
import '../../../stylesheets/Inicio.css';
import logo from '../../../images/tecsup_logo.png';
import Button_navbar from "./left_navbar/buttons_component/Button_navbar";
import Left_Navbar from "./left_navbar/Left_navbar";

function Inicio(){
    return(        
        <div className="inicio-container">   
        <Left_Navbar />

        {/* // -------------------AQUÍ TENDRÍA QUE LLAMAR A MIS NAVBAR MAIN Y LEFT----------------------

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
            <div className="main-navbar">
                <h1>NAVBAR MAIN</h1>
            </div>    */}
           
            
            
        </div>
    );
};

export default Inicio ;