import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

export default function CSSPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl text-[#FFD700] mb-8 text-center">CSS World</h1>

        <div className="bg-[#000044] border-4 border-[#FFD700] p-8 mb-8">
          <h2 className="text-2xl text-[#FFD700] mb-4">What is CSS?</h2>
          <p className="mb-4">CSS (Cascading Style Sheets) is used to style and layout web pages — for example, to alter the font, color, size, and spacing of your content, split it into multiple columns, or add animations and other decorative features.</p>

          <div className="bg-black p-4 rounded">
            <pre className="text-green-400">
              {`body {
  background-color: #000033;
  color: white;
  font-family: 'Press Start 2P', cursive;
}

h1 {
  color: #FFD700;
  text-align: center;
}`}
            </pre>
          </div>
        </div>

        <div className="bg-[#000044] border-4 border-[#FFD700] p-8 mb-8">
          <h2 className="text-2xl text-[#FFD700] mb-4">CSS Box Model</h2>
          <div className="relative w-80 h-80 mx-auto mb-4 text-center">
            <div className="absolute inset-0 bg-red-500 flex items-center justify-center">
              Margin
            </div>
            <div className="absolute inset-4 bg-blue-500 flex items-center justify-center">
              Border
            </div>
            <div className="absolute inset-8 bg-green-500 flex items-center justify-center">
              Padding
            </div>
            <div className="absolute inset-12 bg-yellow-500 flex items-center justify-center">
              Content
            </div>
          </div>
          <p>The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.</p>
        </div>

        <div className="bg-[#000044] border-4 border-[#FFD700] p-8 mb-8">
          <h2 className="text-2xl text-[#FFD700] mb-4">CSS Selectors</h2>
          <table className="w-full border-collapse border-2 border-[#FFD700]">
            <thead>
              <tr className="bg-[#FFD700] text-black">
                <th className="border-2 border-[#FFD700] p-2">Selector</th>
                <th className="border-2 border-[#FFD700] p-2">Example</th>
                <th className="border-2 border-[#FFD700] p-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-2 border-[#FFD700] p-2">.class</td>
                <td className="border-2 border-[#FFD700] p-2">.intro</td>
                <td className="border-2 border-[#FFD700] p-2">Selects all elements with class="intro"</td>
              </tr>
              <tr>
                <td className="border-2 border-[#FFD700] p-2">#id</td>
                <td className="border-2 border-[#FFD700] p-2">#firstname</td>
                <td className="border-2 border-[#FFD700] p-2">Selects the element with id="firstname"</td>
              </tr>
              <tr>
                <td className="border-2 border-[#FFD700] p-2">*</td>
                <td className="border-2 border-[#FFD700] p-2">*</td>
                <td className="border-2 border-[#FFD700] p-2">Selects all elements</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-center mt-8">
          <Link
            to="https://www.codedex.io/css"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FFD700] text-black px-6 py-3 rounded-full hover:bg-yellow-400 transition-colors"
          >
            View More CSS Content on Codedex.io
          </Link>
        </div>
      </div>
    </Layout>
  )
}

