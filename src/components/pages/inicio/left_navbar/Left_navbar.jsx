import './Left_Navbar.css'
import logo from '../../../../images/tecsup_logo.png';
import Button_navbar from "./buttons_component/Button_navbar";

const Left_Navbar = () =>{
    return(
        <div className='aside'>            
                    <img src={logo} alt="logo-tecsup" id="logo" />                  
                    <nav>
                        <ul>
                            <Button_navbar texto="INICIO"></Button_navbar>
                            <Button_navbar texto="INICIO"></Button_navbar>
                            <Button_navbar texto="INICIO"></Button_navbar>
                            <Button_navbar texto="INICIO"></Button_navbar>                        
                        </ul>
                    </nav>            
        </div>  
    );
};

export default Left_Navbar ;