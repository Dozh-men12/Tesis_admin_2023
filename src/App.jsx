import './App.css'
import Login from './access/Login'
import Inicio from '../src/pages/Inicio'
import Statistics from "../src/pages/statistics/Statistics"
import {  BrowserRouter as Router, Routes,  Route} from "react-router-dom";
import Historial from '../src/pages/Historial/Historial'

function App() {

  return (
    <div className='App'>      
      
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path="/inicio-admin" element={<Inicio/>}></Route>
          <Route path='/inicio-admin/stadistics' element={<Statistics/>}></Route>
          <Route path='/inicio-admin/historial' element={<Historial/>}></Route>
        </Routes>
      </Router>
    </div>
  )


}

export default App
