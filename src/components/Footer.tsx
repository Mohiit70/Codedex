import { useLocation, useNavigate } from 'react-router-dom'

export default function Footer() {
  const location = useLocation()
  const navigate = useNavigate()

  const pages = ['/', '/html', '/css', '/javascript', '/python', '/guestbook']

  const goToPreviousPage = () => {
    const currentIndex = pages.indexOf(location.pathname)
    const previousIndex = (currentIndex - 1 + pages.length) % pages.length
    navigate(pages[previousIndex])
  }

  const goToNextPage = () => {
    const currentIndex = pages.indexOf(location.pathname)
    const nextIndex = (currentIndex + 1) % pages.length
    navigate(pages[nextIndex])
  }

  const goToRandomPage = () => {
    const randomIndex = Math.floor(Math.random() * pages.length)
    navigate(pages[randomIndex])
  }

  return (
    <footer className="bg-[#000044] border-t-4 border-[#FFD700] py-4 text-center">
      <div className="container mx-auto px-4">
        <nav className="mb-4">
          <button onClick={goToPreviousPage} className="text-[#00FFFF] hover:underline mx-2">[Previous]</button>
          <button onClick={goToNextPage} className="text-[#00FFFF] hover:underline mx-2">[Next]</button>
          <button onClick={goToRandomPage} className="text-[#00FFFF] hover:underline mx-2">[Random]</button>
        </nav>
        
        <div className="text-sm text-white">
          © 1999 CodeDex | The Coolest Coding Website on the Web
        </div>
      </div>
    </footer>
  )
}

