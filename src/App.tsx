import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';

function App() {
  useEffect(() => {
    document.title = 'Underbug - Segurança Cibernética';
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-black text-white flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Other routes will be added as needed */}
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;