import React from "react";
import '../stylesheets/Login.css'
import logo from '../images/tecsup_logo.png'

// Firebase
import 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

// Configuración de Firebase (obtén esto desde tu consola de Firebase)
const firebaseConfig = {
    apiKey: "AIzaSyBgLs_0PZqGk7GoOodmoJvniG1oG3oLcK8",
    authDomain: "tesis-e4de2.firebaseapp.com",
    projectId: "tesis-e4de2",
    storageBucket: "tesis-e4de2.appspot.com",
    messagingSenderId: "318054575799",
    appId: "1:318054575799:web:9b79b687f664683a302732",
    measurementId: "G-M8LFTGHE90"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function Login() {

    // Función para manejar el inicio de sesión con Google
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
    
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log("Usuario autenticado:", result.user);
                // Aquí puedes redirigir al usuario a otra página si lo deseas, o hacer otras operaciones
            })
            .catch((error) => {
                console.error("Error durante el inicio de sesión con Google:", error);
            });
    };
    return (
        <div className="login-main">
            <div className="login-container">
                <div className="login-header">
                    <img src={logo} alt="Logo de tecsup" />
                </div>
                <div className="login-body">
                    <form action="">
                        <label htmlFor="username">Correo electronico</label>
                        <input type="text" placeholder="admin.tecsup@tecsup.edu.pe" autoFocus="autoFocus" id="username" /> <br />

                        <label htmlFor="password" className="ic-Input text">Contraseña</label>
                        <input type="password" placeholder="Password" autoFocus="autoFocus" id="password" /> <br />

                        <a target="_blank_" href="https://Facebook.com">¿Olvido la contraseña?</a>

                        <div className="buttons-container">

                            <Link to="/inicio-admin"><button className="button-login">INICIAR SESIÓN</button></Link><br />
                            {/* <Link to="/inicio-admin" ><button className="button-login-google">Ingresa con tu correo de tecsup</button></Link> */}

                            <button onClick={signInWithGoogle} className="button-login-google">
                                Ingresa con tu cuenta de Google
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login; 