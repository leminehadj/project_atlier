import './App.css';
import Login from './pages/LoginPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Medcine from "./pages/Medcine/Medcine";
import Agent from "./pages/Agent/Agent";
import Home from "./pages/Gerant/home";
import LoginPage from './pages/LoginPage';
import Stock from "./pages/Gerant/Stock/Stock";
import Comptabilite from "./pages/Gerant/Comptabilite/Comptabilite";
import Personnel from "./pages/Gerant/Personnel/Personnel";
import React, { useEffect } from 'react';
import io from 'socket.io-client';

const SERVER_URL = 'localhost:4000'; // Your Node.js server URL

function App() {
  useEffect(() => {
    const socket = io(SERVER_URL);

    socket.on('connect', () => {
      console.log('Connected to server');
          socket.emit('message', 'Hello from Electron React app');
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (

      <Router>
        <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
          <Route path="/home/Personnel" element={<Personnel />} />
          <Route path="/home/Stock" element={<Stock />} />
          <Route path="/home/comptabilite" element={<Comptabilite />} />
          <Route path="/medcine" element={<Medcine />} />
          <Route path="/Agent" element={<Agent />} />
        </Routes>
      </Router>



  );
}

export default App;


