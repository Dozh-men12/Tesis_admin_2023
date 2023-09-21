import React from "react";
import '../stylesheets/Inicio.css'
import logo from '../images/tecsup_logo.png'

function Inicio(){
    return(        
        <div className="inicio-container">
            <div className="navbar-header">                
                <img src={logo} alt="logo-tecsup" id="logo" />                    
                
                Este es el navbar main
            </div>
            <aside>
                <nav>
                    <ul>
                        <li>Inicio</li>
                        <li>Horarios</li>
                        <li>Datos</li>
                    </ul>
                </nav>
            </aside>
            
            
        </div>
    );
};

export default Inicio ;