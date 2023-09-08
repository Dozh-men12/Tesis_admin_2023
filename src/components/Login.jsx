import React from "react";
import '../stylesheets/Login.css'
import logo from '../images/tecsup_logo.png'
function Login(){
    return(
        <div className="login-container">
            <form>
                <img src={logo} alt="Logo de tecsup" />

                <label for="username">Correo electronico</label>
                <input type="text" placeholder="admin.tecsup@tecsup.edu.pe" id="username"/>

                <label for="password">Contraseña</label>
                <input type="password" placeholder="Password" id="password" />

                <a target="_blank_" href="https://Facebook.com">¿Olvido la contraseña?</a>

                <button>INICIAR SESION</button>
                <button>Ingresa con tu correo de tecsup</button>
            </form>

        </div>
    );
};

export default Login; 