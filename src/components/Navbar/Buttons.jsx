/* import { RxDashboard } from "react-icons/rx"; */

const Buttons = ({ icono, texto }) =>{
    return (
        <>
            <button className='button-navbar'>
                    <div className='mx-[30px]'>
                        {icono}
                    </div>
                    <div className=''>
                        <p>{texto}</p>
                    </div>
            </button>     
        </>
    );
};

export default Buttons;