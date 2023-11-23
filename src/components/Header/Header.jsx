import Navbar from "../Navbar/Navbar";
import { GoSearch } from "react-icons/go";
import { BiMoon, BiSolidMoon} from "react-icons/bi";
import { useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";



/* const [password,setPassword] = useState(false)

    const viewPassword = () =>{
        setPassword(!password)
    } */
/* const [icon, setIcon] = useState(false)

const handlerIcon = () =>{
    setIcon(!icon)
} */


const Header = () =>{
    return(
        <>
         {/* <Navbar/>  */}
        <div className="bg-slate-50 flex h-[70px]  md:w-[85%]  my-4 fixed left-[250px] mx-5 rounded-md flex-row items-center justify-between ">
            <div className="bg-slate-300 h-[38px] my-auto w-[350px] flex rounded-full mx-[20px]">
                <div className=" flex items-center justify-center ml-[20px] mr-[4px]">
                    <GoSearch size={22}/>
                    <input type="text"  className="shadow-none mx-[10px]  bg-none border-none bg-transparent focus:outline-none focus:ring-0" placeholder="Buscar" />
                </div>                
            </div >
            <div className= "flex my-auto mx-[20px] gap-6 text-black lg:w-auto lg:flex-row lg:pr-2" >
                <div /* onClick={handlerIcon} */ className="my-auto" >
                <BiSolidMoon size={25}/>
                    {/* {icon ? <BiMoon size={22}/> : <BiSolidMoon size={22}/>} */}
                </div>
                <div className="my-auto">
                <IoNotificationsOutline size={25}/>
                </div>
                <div className="my-auto">
                    <FaUserCircle size={45}/>
                </div>
            </div>
           

        </div>
        </>
    );

};

export default  Header;

/*
 w-[85%]
 min-w-[90%]
 */