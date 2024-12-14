import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#000044] border-t-4 border-[#FFD700] py-4 text-center">
      <div className="container mx-auto px-4">
        <div className="mb-4">
          <img src="/placeholder.svg?text=HitCounter" alt="Hit Counter" className="inline-block pixelated" width={88} height={31} />
        </div>
        <nav className="mb-4">
          <Link to="/" className="text-[#FFD700] hover:underline mx-2">Home</Link>
          <Link to="/html" className="text-[#FFD700] hover:underline mx-2">HTML</Link>
          <Link to="/css" className="text-[#FFD700] hover:underline mx-2">CSS</Link>
          <Link to="/javascript" className="text-[#FFD700] hover:underline mx-2">JavaScript</Link>
          <Link to="/python" className="text-[#FFD700] hover:underline mx-2">Python</Link>
        </nav>
        <div className="text-sm text-white">
          © 1999 CodeDex | Best viewed in Netscape Navigator
        </div>
      </div>
    </footer>
  )
}

