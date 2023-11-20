import '../../stylesheets/Inicio.css';
import {Navbar , Main_navbar} from '../../index'


function Inicio(){
    return(        
        <section className='h-screen bg-[#B4B4B4] '>           
        {/* <Main_navbar/> */}
        <Navbar/>        
        </section>
    );
}
export default Inicio ;