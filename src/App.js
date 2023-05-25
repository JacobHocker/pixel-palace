import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Tetris from './games/tetris/Tetris';
import Wordle from './games/wordle/Wordle';
import Sidebar from './components/Sidebar';
import About from './pages/about/About';
import GamesPage from './pages/gamesPage/GamesPage';
import Klotski from './games/klotski/Klotski';


const App = () => {
  const [bg, setBg] = useState("retro");

  
  useEffect(() => {
    setBg(window.localStorage.getItem('bg'))
  }, []);

  useEffect(() => {
    window.localStorage.setItem('bg', `${bg}`)
  }, [bg]);

  return (
    <div className={bg === "cyber" ? "cyberApp" : bg === "retro" ? "retroApp" : bg === "modern" ? "modernApp" : bg === "classic" ? "classicApp" : "null"}>
      <Sidebar bg={bg} />
      <Routes>
        <Route element={<Home bg={bg} setBg={setBg} />} path="/" />
        <Route element={<About />} path='/about' />
        <Route element={<GamesPage />} path="/games" />
        <Route element={<Tetris />} path="/tetris" />
        <Route element={<Wordle />} path="/wordle" />
        <Route element={<Klotski />} path="/klotski" />
      </Routes>
    </div>
  )
}

export default App
