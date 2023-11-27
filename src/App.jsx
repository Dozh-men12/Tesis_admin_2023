import { Login, Inicio, Users, Dashboard, Historial} from './index'
/* import Login from './access/Login'
import Inicio from '../src/pages/Inicio'
import Statistics from "../src/pages/statistics/Statistics" */
import {  BrowserRouter as Router, Routes,  Route} from "react-router-dom";
/* import Historial from '../src/pages/Historial/Historial' */

function App() {

  return (
    <div className='App'>         
        <Routes>
          <Route path='/' index element={<Login/>}/>
          <Route path="/inicio-admin" element={<Inicio/>}></Route>
          <Route path='/inicio-admin/dashboard' element={<Dashboard/>}></Route>
          <Route path='/inicio-admin/historial' element={<Historial/>}></Route>
          <Route path='/inicio-admin/usuarios' element={<Users/>}></Route>
        </Routes>      
    </div>
  )


}

export default App
