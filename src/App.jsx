import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import './App.css'
import MovieDetail from './Pages/MovieDetail'

function App() {
return (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
    </Routes>
  </Router>
);
}
        export default App;
