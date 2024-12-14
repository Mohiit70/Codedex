import { useState } from 'react'
import Layout from '../components/Layout'

export default function ContactPage() {
  const [formState, setFormState] = useState('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('sending')
    setTimeout(() => {
      setFormState('sent')
      // Reset form after 2 seconds
      setTimeout(() => setFormState('idle'), 2000)
    }, 1000)
  }

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl text-[#FFD700] mb-4">CONTACT US</h1>
          <div className="animate-bounce">
            <img
              src="/placeholder.svg?text=EMAIL"
              alt="Email Icon"
              width={64}
              height={64}
              className="mx-auto pixelated"
            />
          </div>
        </div>

        <div className="bg-[#000044] border-4 border-[#FFD700] p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[#FFD700] mb-2">YOUR NAME:</label>
              <input
                type="text"
                required
                className="w-full p-3 bg-black border-2 border-[#FFD700] text-white focus:border-yellow-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-[#FFD700] mb-2">YOUR EMAIL:</label>
              <input
                type="email"
                required
                className="w-full p-3 bg-black border-2 border-[#FFD700] text-white focus:border-yellow-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-[#FFD700] mb-2">MESSAGE:</label>
              <textarea
                required
                rows={5}
                className="w-full p-3 bg-black border-2 border-[#FFD700] text-white focus:border-yellow-400 transition-colors"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={formState !== 'idle'}
                className="px-8 py-3 bg-[#FFD700] text-black hover:bg-yellow-400 transition-colors disabled:opacity-50"
              >
                {formState === 'idle' && 'SEND MESSAGE'}
                {formState === 'sending' && 'SENDING...'}
                {formState === 'sent' && 'MESSAGE SENT!'}
              </button>
            </div>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-4">- OR -</p>
            <div className="flex justify-center space-x-6">
              {['Discord', 'Twitter', 'GitHub'].map(platform => (
                <a
                  key={platform}
                  href="#"
                  className="transform hover:scale-110 transition-transform"
                >
                  <img
                    src={`/placeholder.svg?text=${platform}`}
                    alt={platform}
                    width={32}
                    height={32}
                    className="pixelated"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block border-2 border-yellow-500 p-4 bg-black">
            <p className="text-yellow-500 animate-pulse">
              📍 Made with 💛 in Brooklyn
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

