import React from "react";
import '../stylesheets/Login.css'
import logo from '../images/tecsup_logo.png'

import { Link} from "react-router-dom";
function Login(){
    return(
        
        <div className="login-main">
            <div className="login-container">           
                    <div className="login-header">
                        <img src={logo} alt="Logo de tecsup"  /> 
                     </div>                                   
                    <div className="login-body">
                        <form action="">
                            <label htmlFor="username">Correo electronico</label>
                            <input type="text" placeholder="admin.tecsup@tecsup.edu.pe" autoFocus="autoFocus" id="username"/> <br />

                            <label htmlFor="password" className="ic-Input text">Contraseña</label>
                            <input type="password" placeholder="Password" autoFocus="autoFocus" id="password" /> <br />

                            <a  target="_blank_" href="https://Facebook.com">¿Olvido la contraseña?</a>

                            <div className="buttons-container">                          
                                    
                                <Link to="/inicio-admin"><button  className="button-login">INICIAR SESIÓN</button></Link><br/>
                                <Link to="/inicio-admin" ><button className="button-login-google">Ingresa con tu correo de tecsup</button></Link>
                                
                            </div>
                        </form>           
                    </div>        
            </div>
        </div>
            
       
    
       

       
    );
};

export default Login; 