import { useEffect } from 'react'

const SoundEffect = () => {
  useEffect(() => {
    const clickSound = new Audio('/images/sound/click.mp3sound/click.mp3')

    const playSound = () => {
      clickSound.currentTime = 0
      clickSound.play()
    }

    document.addEventListener('click', playSound)

    return () => {
      document.removeEventListener('click', playSound)
    }
  }, [])

  return null
}

export default SoundEffect

