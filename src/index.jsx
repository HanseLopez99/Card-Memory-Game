import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Game from './components/game/Game'

const App = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={(
          <Game />
        )}
      />
    </Routes>
  </Router>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
