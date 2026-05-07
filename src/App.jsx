import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Preloader from './Components/Preloader';
import MembershipPage from './pages/Membership';
import ContactPage from './pages/Contact';
import TrainersPage from './pages/Trainers';
import ScrollToTop from './Components/ScrollToTop';
import BackToTopButton from './Components/BackToTopButton';
import Premiummembership from './pages/Premiummembership';
import About from './pages/About';



const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/membership" element={<MembershipPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/trainers" element={<TrainersPage />} />
            <Route path="/premium-plans" element={<Premiummembership   />} />

          </Routes>
        </main>
        <Footer />
        <BackToTopButton />
      </BrowserRouter>
    </div>
  );
}

export default App
