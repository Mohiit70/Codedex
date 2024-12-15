import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

export default function HTMLPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl text-[#FFD700] mb-8 text-center">HTML Zone</h1>
        
        <div className="bg-[#000044] border-4 border-[#FFD700] p-8 mb-8">
          <h2 className="text-2xl text-[#FFD700] mb-4">What is HTML?</h2>
          <p className="mb-4">HTML (HyperText Markup Language) is the code that is used to structure a web page and its content. For example, content could be structured within a set of paragraphs, a list of bulleted points, or using images and data tables.</p>
          
          <div className="bg-black p-4 rounded">
            <pre className="text-green-400">
              {`<html>
  <head>
    <title>My First Web Page</title>
  </head>
  <body>
    <h1>Welcome to HTML!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>`}
            </pre>
          </div>
        </div>

        <div className="bg-[#000044] border-4 border-[#FFD700] p-8 mb-8">
          <h2 className="text-2xl text-[#FFD700] mb-4">Basic HTML Tags</h2>
          <table className="w-full border-collapse border-2 border-[#FFD700]">
            <thead>
              <tr className="bg-[#FFD700] text-black">
                <th className="border-2 border-[#FFD700] p-2">Tag</th>
                <th className="border-2 border-[#FFD700] p-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-2 border-[#FFD700] p-2">&lt;h1&gt; - &lt;h6&gt;</td>
                <td className="border-2 border-[#FFD700] p-2">Headings</td>
              </tr>
              <tr>
                <td className="border-2 border-[#FFD700] p-2">&lt;p&gt;</td>
                <td className="border-2 border-[#FFD700] p-2">Paragraph</td>
              </tr>
              <tr>
                <td className="border-2 border-[#FFD700] p-2">&lt;a&gt;</td>
                <td className="border-2 border-[#FFD700] p-2">Link</td>
              </tr>
              <tr>
                <td className="border-2 border-[#FFD700] p-2">&lt;img&gt;</td>
                <td className="border-2 border-[#FFD700] p-2">Image</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-center mb-8">
          <img
            src="https://i.imgflip.com/9dtw31.jpg"
            alt="HTML is Awesome Meme"
            className="inline-block max-w-full h-auto"
          />
          <div className="mt-2 text-sm text-gray-400">
            <a href="https://imgflip.com/memegenerator" className="hover:underline">from Imgflip Meme Generator</a>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link 
            to="https://www.codedex.io/html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#FFD700] text-black px-6 py-3 rounded-full hover:bg-yellow-400 transition-colors"
          >
            View More HTML Content on Codedex.io
          </Link>
        </div>
      </div>
    </Layout>
  )
}

