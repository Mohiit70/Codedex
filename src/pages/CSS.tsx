import Layout from '../components/Layout'

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
          <img
            src="/placeholder.svg?text=CSS+Box+Model"
            alt="CSS Box Model"
            width={400}
            height={300}
            className="pixelated mx-auto mb-4"
          />
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
      </div>
    </Layout>
  )
}

