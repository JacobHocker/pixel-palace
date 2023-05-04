import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Tetris from './games/tetris/Tetris';
import Wordle from './games/wordle/Wordle';


const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Tetris />} path="/tetris" />
        <Route element={<Wordle />} path="/wordle" />
      </Routes>
    </div>
  )
}

export default App
