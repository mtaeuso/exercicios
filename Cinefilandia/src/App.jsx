import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';


function App() {
  
  return (

    <div className="App">
    <Link to="/"> Home </Link>
    <Link to="/Filmes/1"> Filmes </Link>
    <Navbar/>
    <Outlet />

    </div>
  );
};

export default App;
