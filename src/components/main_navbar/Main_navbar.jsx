import './Main_navbar.css'
import logo_tecsup from '../../images/tecsup_logo.png'
import {FaCircleUser} from "react-icons/fa6";


const Main_navbar = () =>{
    return(
        <>
         <header id='header' className='header'>
            <div className='container'>                         
                <div className='logo'> 
                    <img className='tecsup_logo' src={logo_tecsup} alt="logo.tecsup" />
                </div>
                <div className='account_container'>                    
                    <div className='photo_admin'>
                        <FaCircleUser className='icon_admin' size={35} />
                    </div>
                    <div className='datos_admin'>
                        <span className='name_admin'>Oscar Hurtado</span><br/>
                        <span className='rol'>Administrador</span>
                    </div>                   

                </div>
               {/*  <nav className='menu'>               
                    <a href="#">Inicio</a>
                    <a href="#">Deportes</a>
                    <a href="#">Más</a>
                </nav> */}
            </div>
           
        </header>
                       
        </>  
    );
};

export default Main_navbar;