import { useState, useEffect } from 'react'

export default function VisitorCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const storedCount = localStorage.getItem('visitorCount')
    const newCount = storedCount ? parseInt(storedCount, 10) + 1 : 1
    setCount(newCount)
    localStorage.setItem('visitorCount', newCount.toString())
  }, [])

  return (
    <div className="bg-black inline-block p-2 border-2 border-[#00FFFF] shadow-lg">
      <span className="text-[#00FFFF] font-bold">Visitors: </span>
      <span className="text-[#FF00FF] font-bold">{count.toString().padStart(6, '0')}</span>
    </div>
  )
}

