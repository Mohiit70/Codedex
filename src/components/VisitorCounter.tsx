import { useState, useEffect } from 'react'

export default function VisitorCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const storedCount = localStorage.getItem('visitorCount')
    if (storedCount) {
      setCount(parseInt(storedCount, 10))
    } else {
      setCount(1)
    }
    localStorage.setItem('visitorCount', (count + 1).toString())
  }, [])

  return (
    <div className="bg-black inline-block p-2 border-2 border-[#00FFFF]">
      <span className="text-[#00FFFF] font-bold">Visitors: </span>
      <span className="text-[#FF00FF] font-bold">{count.toString().padStart(6, '0')}</span>
    </div>
  )
}

