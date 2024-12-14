import { useEffect, useState } from 'react'

interface MovingEmojiProps {
  emoji: string
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}

export default function MovingEmoji({ emoji, position }: MovingEmojiProps) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset(prev => (prev + 1) % 360)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const getPosition = () => {
    switch (position) {
      case 'top-left':
        return {
          left: `${Math.sin(offset * 0.05) * 20 + 100}px`,
          top: '100px'
        }
      case 'top-right':
        return {
          right: `${Math.sin(offset * 0.05) * 20 + 100}px`,
          top: '100px'
        }
      case 'bottom-left':
        return {
          left: `${Math.sin(offset * 0.05) * 20 + 100}px`,
          top: '400px'
        }
      case 'bottom-right':
        return {
          right: `${Math.sin(offset * 0.05) * 20 + 100}px`,
          top: '400px'
        }
    }
  }

  return (
    <div
      className="fixed text-4xl animate-float"
      style={{
        ...getPosition(),
        transition: 'all 0.5s ease-in-out',
        zIndex: 10
      }}
    >
      {emoji}
    </div>
  )
}

