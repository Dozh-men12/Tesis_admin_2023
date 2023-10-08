import './App.css'
import Login from './components/Login'
import Inicio from './components/pages/inicio/Inicio'
import Statistics from "../src/components/pages/inicio/main_content/statistics/Statistics"
import {  BrowserRouter as Router, Routes,  Route} from "react-router-dom";
import Historial from './components/pages/inicio/main_content/historial/Historial'

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
