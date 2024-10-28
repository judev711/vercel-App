// import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './Register';
import Home from './Home.jsx';
import Login from './Login.jsx';
// import NavBar from './components/NavBar.jsx';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      

    </>
  );
}

export default App
