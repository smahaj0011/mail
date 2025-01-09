import { useState } from 'react'
import './App.css'
// import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
