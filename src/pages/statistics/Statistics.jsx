import { Left_navbar, Main_navbar } from "../..";
import './Statistics.css'

const Stadistics = () =>{
    return(
        <>
        <Main_navbar/>       
        <Left_navbar>
        <div className="stadistics-container">
            <div className="content">
                <h1>320</h1>
                <b>Total de reservas registradas</b>
            </div>
           
        </div>
        </Left_navbar>
       
        
        </>
       
    );

};

export default Stadistics;