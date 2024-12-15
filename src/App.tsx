import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import HTML from './pages/HTML'
import CSS from './pages/CSS'
import JavaScript from './pages/JavaScript'
import Python from './pages/Python'
import Team from './pages/Team'
import Contact from './pages/Contact'
import Courses from './pages/Courses'
import UnderConstruction from './pages/UnderConstruction'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/html" element={<HTML />} />
        <Route path="/css" element={<CSS />} />
        <Route path="/javascript" element={<JavaScript />} />
        <Route path="/python" element={<Python />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/under-construction" element={<UnderConstruction />} />
      </Routes>
    </Router>
  )
}

export default App

