import './Left_Navbar.css'
import {AiFillHome} from "react-icons/ai";
import {VscHistory} from "react-icons/vsc"
import { Link } from "react-router-dom";



const Left_navbar = ({children}) =>{
    return(
        <>
        <div className='container-menu'> 
            <div className='cont-menu'>
                <nav>
                    <Link to="/inicio-admin/stadistics"><AiFillHome className='icon' size="22px"/>Inicio</Link>
                    <Link to="/inicio-admin/historial"> <VscHistory  className='icon'size='22px'/>Historial</Link>
                    <Link  href="#">Inicio</Link>
                    <Link  href="#">Inicio</Link>
                </nav>
            </div>                  
        </div>  
        <div className='children-main-content'>
            {children}
        </div>
        </>
        
        
    );
};

export default Left_navbar ;

