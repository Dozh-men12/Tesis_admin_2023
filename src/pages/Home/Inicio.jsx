import '../../stylesheets/Inicio.css';
import {Navbar , Main_navbar} from '../../index'
import Header from '../../components/Header/Header';


function Inicio(){
    return(        
        <div className='bg-[#E9E9E9] dark:bg-[#2D2E34] h-screen '>   
        <Navbar/>     
        <Header/>
        {/* <Header/>   */}              
        </div>
    );
}
export default Inicio ;