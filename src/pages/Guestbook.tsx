import { useState, useEffect } from 'react'
import Layout from '../components/Layout'

interface GuestbookEntry {
  name: string;
  message: string;
  date: string;
}

export default function GuestbookPage() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([])
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const storedEntries = localStorage.getItem('guestbookEntries')
    if (storedEntries) {
      setEntries(JSON.parse(storedEntries))
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newEntry: GuestbookEntry = {
      name,
      message,
      date: new Date().toLocaleString()
    }
    const updatedEntries = [...entries, newEntry]
    setEntries(updatedEntries)
    localStorage.setItem('guestbookEntries', JSON.stringify(updatedEntries))
    setName('')
    setMessage('')
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl text-[#FFD700] mb-8 text-center animate-pulse">CodeDex Guestbook</h1>
        
        <div className="bg-[#000044] border-4 border-[#FFD700] p-8 mb-8">
          <h2 className="text-2xl text-[#FFD700] mb-4">Sign our Guestbook!</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-[#00FFFF] mb-2">Your Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-2 bg-black text-white border-2 border-[#00FFFF]"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-[#00FFFF] mb-2">Your Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="w-full p-2 bg-black text-white border-2 border-[#00FFFF]"
              ></textarea>
            </div>
            <button type="submit" className="bg-[#FFD700] text-black px-4 py-2 hover:bg-yellow-400 transition-colors">
              Sign Guestbook
            </button>
          </form>
        </div>

        <div className="bg-[#000044] border-4 border-[#FFD700] p-8">
          <h2 className="text-2xl text-[#FFD700] mb-4">Recent Entries</h2>
          <div className="space-y-4">
            {entries.slice().reverse().map((entry, index) => (
              <div key={index} className="bg-[#000066] p-4 border-2 border-[#00FFFF]">
                <p className="text-[#FFD700]">{entry.name} says:</p>
                <p className="text-white">{entry.message}</p>
                <p className="text-xs text-gray-400 mt-2">{entry.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

