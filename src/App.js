import React from 'react'
import { BrowserRouter as Routar, Routes,Route } from 'react-router-dom'
import Navbar4 from './Component/Navbar4';
import Home from './Component/Home';
import Student from './Component/Student';
import Contect from './Component/Contect';
import './Component/style.css'

function App() {
  return (
    <div className="App">
    <Routar>
      <Navbar4 />
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/student' element={<Student />}/>
        <Route path='/contect' element={<Contect />}/>
      </Routes>

    </Routar>
   
    </div>
  );
}

export default App;
