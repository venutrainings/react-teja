import './App.css';
import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from './component/pages/Home';
import About from './component/pages/About';
import Contact from './component/pages/Contact';
import NotFound from './component/pages/NotFound';
import Navbar from './component/layout/Navbar';
import AddRecord from './component/pages/AddRecord';
import UpdateRecord from './component/pages/UpdateRecord';
  function App() {
    return (
    <div className="App">
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/addRecord" element={<AddRecord/>} />
            <Route path="/updateRecord" element={<UpdateRecord/>} />

            <Route  element={<NotFound/>} />

        </Routes>
        </div>
    </div>
  );
}

export default App;
