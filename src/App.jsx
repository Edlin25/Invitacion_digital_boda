import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/pages/Home';

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/'/>
      <Route path='/'/>
      <Route path='/'/>
    </Routes>
    </BrowserRouter>
  )
} 

export default App
