import '../stylesheets/Inicio.css';
import Left_Navbar from '../pages/inicio/navbar/left_navbar/Left_navbar';

import Main_navbar from "./inicio/navbar/main_navbar/Main_navbar";


function Inicio(){
    return(        
        <>           
        <Main_navbar/>
        <Left_Navbar/>
        
        </>
    );
}
export default Inicio ;