import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

export default function PythonPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl text-[#FFD700] mb-8 text-center">Python Zone 🐍</h1>
        
        <div className="bg-[#000044] border-4 border-[#FFD700] p-8 mb-8">
          <h2 className="text-2xl text-[#FFD700] mb-4">What is Python?</h2>
          <p className="mb-4">Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.</p>
          <p className="mb-4">Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured, object-oriented and functional programming.</p>
        </div>

        <div className="bg-[#000044] border-4 border-[#FFD700] p-8 mb-8">
          <h2 className="text-2xl text-[#FFD700] mb-4">Gnarly Python Facts! 🤘</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Python was created in the 90s, just like us!</li>
            <li>It's named after Monty Python, not the snake!</li>
            <li>Use Python to create cool text-based games!</li>
            <li>Python can help you become a l33t hacker!</li>
          </ul>
        </div>

        <div className="bg-[#000044] border-4 border-[#FFD700] p-8 mb-8">
          <h2 className="text-2xl text-[#FFD700] mb-4">Why Learn Python?</h2>
          <p className="mb-4">Python is beginner-friendly and versatile, making it a great choice for various applications, from web development to data science.</p>
          <p className="mb-4">Its large and active community provides ample resources and support for learners.</p>
        </div>

        <div className="text-center mt-8">
          <Link 
            to="https://www.codedex.io/python" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#FFD700] text-black px-6 py-3 rounded-full hover:bg-yellow-400 transition-colors"
          >
            View More Python Content on Codedex.io
          </Link>
        </div>
      </div>
    </Layout>
  )
}

