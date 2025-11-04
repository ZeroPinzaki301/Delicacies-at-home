import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer'

import Homepage from './pages/Homepage';

import { useState } from 'react'
import './App.css'

function AppContent() {
  const [count, setCount] = useState(0)
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/favorites" element={<div className="min-h-screen pt-20 px-4">Favorites Page - Coming Soon</div>} />
        <Route path="/dishes" element={<div className="min-h-screen pt-20 px-4">Dishes Page - Coming Soon</div>} />
        <Route path="/lore" element={<div className="min-h-screen pt-20 px-4">Lore Page - Coming Soon</div>} />
        <Route path="/contact" element={<div className="min-h-screen pt-20 px-4">Contact Us Page - Coming Soon</div>} />
        <Route path="/login" element={<div className="min-h-screen pt-20 px-4">Login Page - Coming Soon</div>} />
        <Route path="/profile" element={<div className="min-h-screen pt-20 px-4">Profile Page - Coming Soon</div>} />
      </Routes>
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App