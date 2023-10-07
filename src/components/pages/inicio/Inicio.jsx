import '../../../stylesheets/Inicio.css';
import Left_Navbar from "./left_navbar/Left_navbar";
import Main_navbar from "./main_navbar/Main_navbar";

function Inicio(){
    return(        
        <>           
        {/* <Left_Navbar/>    */}     
        <Main_navbar/>
        
        
       
        {/* // -------------------AQUÍ TENDRÍA QUE LLAMAR A MIS NAVBAR MAIN Y LEFT----------------------

            <div className="left-navbar">
                <aside>
                        <img src={logo} alt="logo-tecsup" id="logo" />                  
                        <nav>
                            <ul>
                                <Button_navbar texto="INICIO"></Button_navbar>
                                <Button_navbar texto="INICIO"></Button_navbar>
                                <Button_navbar texto="INICIO"></Button_navbar>
                                <Button_navbar texto="INICIO"></Button_navbar>                        
                            </ul>
                        </nav>
                </aside>
            </div>  
            <div className="main-navbar">
                <h1>NAVBAR MAIN</h1>
            </div>    */}
           
            
            
        </>
    );
}
export default Inicio ;