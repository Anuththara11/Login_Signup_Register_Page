import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css' 

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/Register" element={<Signup />} />

        <Route path='/Login' element={<Login />} />
        <Route path="/Home" element={<Home />} />

      </Routes>  
    </BrowserRouter>
  );
}

export default App;
