import {Routes, Route} from 'react-router-dom'

import './App.css';
import React from "react";
import Login from "./login";
import Signup from "./signup";
import HomePage from "./pages/home";
import RoomPage from "./pages/room";


function App() {
  return (
    <div className="App">
    
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/home" element={<HomePage />}></Route>
        <Route path="/room/:roomId" element={<RoomPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
