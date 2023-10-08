import './Main_navbar.css'
import logo_tecsup from '../../../../images/tecsup_logo.png'
import { VscThreeBars } from 'react-icons/vsc'

const Main_navbar = () =>{
    return(
        <>
         <header className='header'>
            <div className='container'>                                 
                   
                <div className='logo'>
                    <button className='button'>Abrir</button>      
                    <img className='tecsup_logo' src={logo_tecsup} alt="logo.tecsup" />
                </div>
                <nav className='menu'>               
                    <a href="#">Inicio</a>
                    <a href="#">Deportes</a>
                    <a href="#">Más</a>
                </nav>
            </div>
           
        </header>
       {/*  <header className='header'>
            <div className='container'>                                 
                   
                <div v className='logo'>
                    <button>Abrir</button>      
                    <img src={logo_tecsup} alt="logo.tecsup" />
                </div>
                <nav className='menu'>               
                    <a href="#">Inicio</a>
                    <a href="#">Deportes</a>
                    <a href="#">Más</a>
                </nav>
            </div>
           
        </header>   */}
                       
        </>  
    );
};

export default Main_navbar;