import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-[#000044] border-b-4 border-[#FFD700]">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/placeholder.svg?text=CD" 
              alt="CodeDex Logo" 
              width={40} 
              height={40}
              className="pixelated"
            />
            <span className="text-xl text-[#FFD700] font-bold">CodeDex</span>
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link to="/html" className="text-white hover:text-[#FFD700] transition-colors">
              HTML
            </Link>
            <Link to="/css" className="text-white hover:text-[#FFD700] transition-colors">
              CSS
            </Link>
            <Link to="/javascript" className="text-white hover:text-[#FFD700] transition-colors">
              JS
            </Link>
            <Link to="/python" className="text-white hover:text-[#FFD700] transition-colors">
              PYTHON
            </Link>
            <Link to="/team" className="text-white hover:text-[#FFD700] transition-colors">
              TEAM
            </Link>
            <Link to="/contact" className="text-white hover:text-[#FFD700] transition-colors">
              CONTACT
            </Link>
          </div>

          <Link 
            to="/courses"
            className="px-4 py-2 bg-[#FFD700] text-black hover:bg-yellow-400 transition-colors font-bold"
          >
            START CODING
          </Link>
        </div>
      </nav>
    </header>
  )
}

