import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Tetris from './games/tetris/Tetris';
import Wordle from './games/wordle/Wordle';
import Sidebar from './components/Sidebar';


const App = () => {
  const [bg, setBg] = useState("cyber");

  
  useEffect(() => {
    setBg(window.localStorage.getItem('bg'))
  }, []);

  useEffect(() => {
    window.localStorage.setItem('bg', `${bg}`)
  }, [bg]);

  return (
    <div className={bg === "cyber" ? "cyberApp" : bg === "retro" ? "retroApp" : bg === "modern" ? "modernApp" : "null"}>
      <Sidebar />
      <Routes>
        <Route element={<Home bg={bg} setBg={setBg} />} path="/" />
        <Route element={<Tetris />} path="/tetris" />
        <Route element={<Wordle />} path="/wordle" />
      </Routes>
    </div>
  )
}

export default App
