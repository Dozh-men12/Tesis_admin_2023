import './Left_Navbar.css'
import {VscChromeClose} from "react-icons/vsc";
import logo from '../../../../images/tecsup_logo.png';
import Button_navbar from "./buttons_component/Button_navbar";

const Left_Navbar = () =>{
    return(
        <div className='container-menu'>   {/*  left navbarr */}
            <div className='cont-menu'>
                <nav>
                    <a href="#">Inicio</a>
                    <a href="#">Horario</a>
                    <a href="#">Inicio</a>
                    <a href="#">Inicio</a>
                </nav>
              {/*   <label htmlFor=""><VscChromeClose/></label> */}
            </div> 

                   {/*  <img src={logo} alt="logo-tecsup" id="logo" />                  
                    <nav>
                        <ul>
                            <Button_navbar texto="INICIO"></Button_navbar>
                            <Button_navbar texto="INICIO"></Button_navbar>
                            <Button_navbar texto="INICIO"></Button_navbar>
                            <Button_navbar texto="INICIO"></Button_navbar>                        
                        </ul>
                    </nav>            */} 
        </div>  
    );
};

export default Left_Navbar ;