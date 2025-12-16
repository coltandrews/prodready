import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import ServicesPage from './pages/ServicesPage'
import OurWorkPage from './pages/OurWorkPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/work" element={<OurWorkPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

