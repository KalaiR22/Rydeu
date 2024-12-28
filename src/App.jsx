import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,} from "react-router-dom"; 
  import Home from './pages/Home'
import Help from './pages/Help';
import Dashboard from './pages/Dashboard';

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App
