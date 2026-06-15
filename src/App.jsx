import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Painting from './pages/Painting'
import Photography from './pages/Photography'
import Robotics from './pages/Robotics'
import Experience from './pages/Experience'
import Education from './pages/Education'
import './styles/global.css'
import './styles/home.css'

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/painting" element={<Painting />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/robotics" element={<Robotics />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </Router>
  )
}

export default App
