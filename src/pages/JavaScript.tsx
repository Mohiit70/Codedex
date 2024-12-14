import Layout from '../components/Layout'

export default function JavaScriptPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl text-[#FFD700] mb-8 text-center">JavaScript Magic</h1>
        
        <div className="bg-[#000044] border-4 border-[#FFD700] p-8 mb-8">
          <h2 className="text-2xl text-[#FFD700] mb-4">What is JavaScript?</h2>
          <p className="mb-4">JavaScript is a programming language that adds interactivity to your website. This happens in games, in the behavior of responses when buttons are pressed or with data entry on forms; with dynamic styling; with animation, etc.</p>
          
          <div className="bg-black p-4 rounded">
            <pre className="text-green-400">
              {`function greet(name) {
  console.log('Hello, ' + name + '!');
}

greet('Coder');  // Outputs: Hello, Coder!`}
            </pre>
          </div>
        </div>

        <div className="bg-[#000044] border-4 border-[#FFD700] p-8 mb-8">
          <h2 className="text-2xl text-[#FFD700] mb-4">JavaScript Data Types</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>String</li>
            <li>Number</li>
            <li>Boolean</li>
            <li>Object</li>
            <li>Array</li>
            <li>Null</li>
            <li>Undefined</li>
          </ul>
        </div>

        <div className="bg-[#000044] border-4 border-[#FFD700] p-8 mb-8">
          <h2 className="text-2xl text-[#FFD700] mb-4">DOM Manipulation</h2>
          <p className="mb-4">JavaScript can change all the HTML elements in the page:</p>
          <div className="bg-black p-4 rounded">
            <pre className="text-green-400">
              {`document.getElementById("demo").innerHTML = "Hello JavaScript!";
document.getElementById("myImage").src = "landscape.jpg";`}
            </pre>
          </div>
        </div>

        <div className="text-center">
          <img
            src="/placeholder.svg?text=JavaScript+is+Magic!"
            alt="JavaScript is Magic"
            width={300}
            height={200}
            className="pixelated inline-block"
          />
        </div>
      </div>
    </Layout>
  )
}

