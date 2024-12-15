import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import MovingAlert from './MovingAlert'
import VisitorCounter from './VisitorCounter'
import SoundEffect from './SoundEffect'

export default function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate()

  useEffect(() => {
    document.body.style.zoom = "90%"
    
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('/')) {
        e.preventDefault()
        navigate(target.getAttribute('href') as string)
        window.scrollTo(0, 0)
      }
    }

    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
      document.body.style.zoom = "100%"
    }
  }, [navigate])

  return (
    <div className="min-h-screen bg-[#000033] text-white font-['Press_Start_2P'] relative overflow-hidden">
      <SoundEffect />
      <div className="stars absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="star absolute animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: '2px',
              height: '2px',
              backgroundColor: 'white',
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      <Header />
      <main className="container mx-auto px-4 py-8 relative">
        {children}
      </main>
      <div className="fixed bottom-4 right-4 z-50">
        <VisitorCounter />
      </div>
      <Footer />
      <MovingAlert />
    </div>
  )
}

