import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#000044] border-t-4 border-[#FFD700] py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <img 
            src="/placeholder.svg?text=Visitor+Counter" 
            alt="Visitor Counter" 
            width={150} 
            height={30}
            className="inline-block pixelated"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-[#FFD700] mb-4 font-bold">NAVIGATION</h3>
            <div className="space-y-2">
              <Link to="/html" className="block text-white hover:text-[#FFD700]">HTML</Link>
              <Link to="/css" className="block text-white hover:text-[#FFD700]">CSS</Link>
              <Link to="/javascript" className="block text-white hover:text-[#FFD700]">JavaScript</Link>
              <Link to="/python" className="block text-white hover:text-[#FFD700]">Python</Link>
            </div>
          </div>
          <div>
            <h3 className="text-[#FFD700] mb-4 font-bold">CONNECT</h3>
            <div className="space-y-2">
              <a href="#" className="block text-white hover:text-[#FFD700]">Discord</a>
              <a href="#" className="block text-white hover:text-[#FFD700]">Twitter</a>
              <a href="#" className="block text-white hover:text-[#FFD700]">GitHub</a>
            </div>
          </div>
          <div>
            <h3 className="text-[#FFD700] mb-4 font-bold">NEWSLETTER</h3>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 bg-[#000033] border-2 border-[#FFD700] text-white"
              />
              <button
                type="submit"
                className="w-full p-2 bg-[#FFD700] text-black hover:bg-yellow-400 transition-colors font-bold"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
        <div className="text-center text-sm text-white">
          Made with 💛 in the 90s style • © 2024 CodeDex
        </div>
      </div>
    </footer>
  )
}

