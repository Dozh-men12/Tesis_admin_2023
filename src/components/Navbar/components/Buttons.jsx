/* import { RxDashboard } from "react-icons/rx"; */

const Buttons = ({ icono, texto }) =>{
    console.log(icono)
    return (
        <>
            <button className='button-navbar '>
                    <div className='flex justify-center items-center px-[20px] gap-3'>
                        {icono}
                        <span>{texto}</span>                        
                    </div>          
            </button>     
        </>
    );
};

export default Buttons;