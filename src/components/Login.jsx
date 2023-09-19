import React from "react";
import '../stylesheets/Login.css'
import logo from '../images/tecsup_logo.png'
import Inicio from "./Inicio";
import {  BrowserRouter as Router, Routes,  Route,  Link} from "react-router-dom";
function Login(){
    return(
        <Router>
        <div className="login-container">
            <div className="login_header">
                <img src={logo} alt="Logo de tecsup" />
            </div>
            <div className="login-body">
                <form action="">
                    <label htmlFor="username">Correo electronico</label>
                    <input type="text" placeholder="admin.tecsup@tecsup.edu.pe" autoFocus="autoFocus" id="username"/> <br />

                    <label htmlFor="password" className="ic-Input text">Contraseña</label>
                    <input type="password" placeholder="Password" autoFocus="autoFocus" id="password" /> <br />

                    <a  target="_blank_" href="https://Facebook.com">¿Olvido la contraseña?</a>

                    <div className="buttons-container">
                        <Link  target="__blank__" to="/inicio-admin" className="button-login">INICIAR SESIÓN</Link><br/>
                        <Link to="/inicio-admin" className="button-login-google">Ingresa con tu correo de tecsup</Link>
                        
                    </div>
                </form>           
            </div>        
        </div>
        <Routes>
            <Route path="/inicio-admin" element={<Inicio/>}></Route>
        </Routes>
        </Router>

       
    );
};

export default Login; 