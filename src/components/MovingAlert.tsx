import { useState, useEffect } from 'react'

export default function MovingAlert() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const moveAlert = () => {
      setPosition({
        x: Math.random() * (window.innerWidth - 200),
        y: Math.random() * (window.innerHeight - 100),
      })
    }

    const interval = setInterval(moveAlert, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="fixed bg-[#FF00FF] text-black p-2 border-2 border-[#00FFFF] animate-pulse"
      style={{ left: position.x, top: position.y }}
    >
      🚀 Welcome to the future of coding! 🚀
    </div>
  )
}

