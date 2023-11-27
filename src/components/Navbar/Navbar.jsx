import logo_tecsup from '../../assets/logo.svg'
import Buttons from './components/Buttons';
import {navbarData} from "../../constans/index";
import { RiSettings3Fill } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";
import { Link } from 'react-router-dom';


const Navbar = () =>{
    return(
        <>       
        <section className="sm:h-screen w-[250px] dark:bg-slate-700 flex flex-col absolute bg-slate-50 ">
            <div className='px-[10px] py-[10px]'>
                <img src={logo_tecsup} alt="logo tecsup" className='h-[80px] dark:bg-slate-700' />
            </div>
            <div className='flex flex-col gap-4 mt-[55px]'>
                {navbarData.map((buttons ,index) => (
                    <Link key={index} to={buttons.URL}>
                        <Buttons key={index} {...buttons}/>
                    </Link>
                )
                )}
            </div>            
            <div className='flex flex-col mt-auto mb-5 gap-4  '>            
                <Buttons  icono={<RiSettings3Fill size={20}/>} texto={"Configuracion"}/>
                <Buttons  icono={<TbLogout2  size={20}/>} texto={"Salir"}/>  
            </div>
     
        </section>        
        </>          
        
    );
};

export default Navbar ;


{/* <div className='container-menu'>         
            <div className='cont-menu'>
                <nav>
                    <Link to="/inicio-admin/stadistics"><AiFillHome className='icon' size={22}/>Inicio</Link>
                    <Link to="/inicio-admin/historial"> <VscHistory  className='icon'size={22}/>Historial</Link>
                    <Link  href="#">Inicio</Link>
                    <Link  href="#">Inicio</Link>
                </nav>
            </div>                  
        </div>  
        <div className='children-main-content'>
            {children}
</div> */}
