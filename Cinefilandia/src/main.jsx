import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import App from './App'

import Home from "./Paginas/Home";
import Filmes from "./Paginas/Filmes";
import Search from "./Paginas/Search";

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   <BrowserRouter> 
    <Routes>

     <Route element={<App />}>

        <Route path="/" element={<Home />}           />
        <Route path="Filmes/:id" element={<Filmes/>} />
        <Route path="Search" element={<Search />}    />

     </Route>

    </Routes>
   </BrowserRouter>

  </React.StrictMode>
);
