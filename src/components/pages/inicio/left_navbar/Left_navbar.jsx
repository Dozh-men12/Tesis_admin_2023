import './Left_Navbar.css'
import {AiFillHome} from "react-icons/ai";
import {VscHistory} from "react-icons/vsc"
import logo from '../../../../images/tecsup_logo.png';



const Left_Navbar = () =>{
    return(
        <div className='container-menu'>   {/*  left navbarr */}
            <div className='cont-menu'>
                <nav>
                    <a href="#" ><AiFillHome className='icon' size="22px"/>Inicio</a>
                    <a href="#"> <VscHistory  className='icon'size='22px'/>Historial</a>
                    <a href="#">Inicio</a>
                    <a href="#">Inicio</a>
                </nav>
              {/*   <label htmlFor=""><VscChromeClose/></label> */}
            </div> 

                  
        </div>  
    );
};

export default Left_Navbar ;