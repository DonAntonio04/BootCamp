import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'

export default function App() {
  return (
    <div>
      <nav style={{ padding: 10, background: '#eee' }}>
        <Link to="/" style={{ margin: 10 }}>Home</Link>
        <Link to="/about" style={{ margin: 10 }}>About</Link>
        <Link to="/projects" style={{ margin: 10 }}>Projects</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  )
}