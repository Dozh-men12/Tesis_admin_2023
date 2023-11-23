import {RxDashboard} from "react-icons/rx";
import { FaUsers } from "react-icons/fa";
import { GrHistory } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";

export const navbarData = [
    {   
        icono:<RxDashboard size={20}/>,
        texto:"Dashboard",
        icono2:<IoIosArrowForward size={16}/>
    },
    {
        icono:<GrHistory size={20}/>,
        texto:"Historial",
        icono2:<IoIosArrowForward size={16}/>
    },
    { 
        icono:<FaUsers size={20}/>,
        texto:"Usuarios",
        icono2:<IoIosArrowForward size={16}/>
    },
]