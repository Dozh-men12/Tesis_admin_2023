import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Inicio from './components/Inicio'
import {  BrowserRouter as Router, Routes,  Route,  Link} from "react-router-dom";

function App() {

  return (
    <div className='App'>
      
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path="/inicio-admin" element={<Inicio/>}></Route>
        </Routes>
      </Router>
     {/*  <Inicio></Inicio> */}
    </div>
  )


}

export default App
