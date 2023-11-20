import logo_tecsup from '../../images/tecsup_logo.png'
import Buttons from './Buttons';
import {navbarData} from "../../constans/index";


const Navbar = () =>{
    return(
        <section className="h-screen w-[250px] flex flex-col gap-3 bg-slate-50">
            <div className='px-[10px] py-[10px]'>
                <img src={logo_tecsup} alt="logo tecsup" className='h-[70px]' />
            </div>
            {navbarData.map((buttons ,index) => (
                <Buttons key={index} {...buttons}/>
            )
            )}
           
        </section>
        
        
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
