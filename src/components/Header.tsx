import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-[#000044] border-b-4 border-[#FFD700]">
      <nav className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-lg text-[#FFD700] font-bold">CodeDex</span>
          </Link>
          
          <div className="hidden md:flex space-x-4">
            <Link to="/html" className="text-white hover:text-[#FFD700] transition-colors text-sm">HTML</Link>
            <Link to="/css" className="text-white hover:text-[#FFD700] transition-colors text-sm">CSS</Link>
            <Link to="/javascript" className="text-white hover:text-[#FFD700] transition-colors text-sm">JS</Link>
            <Link to="/python" className="text-white hover:text-[#FFD700] transition-colors text-sm">PY</Link>
            <Link to="/team" className="text-white hover:text-[#FFD700] transition-colors text-sm">TEAM</Link>
            <Link to="/contact" className="text-white hover:text-[#FFD700] transition-colors text-sm">CONTACT</Link>
          </div>

          <Link 
            to="/courses"
            className="px-3 py-1 bg-[#FFD700] text-black hover:bg-yellow-400 transition-colors font-bold text-sm"
          >
            START CODING
          </Link>
        </div>
      </nav>
    </header>
  )
}

