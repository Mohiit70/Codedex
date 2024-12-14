import Layout from '../components/Layout'

export default function PythonPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl text-[#FFD700] mb-8 text-center">Python Paradise</h1>
        
        <div className="bg-[#000044] border-4 border-[#FFD700] p-8 mb-8">
          <h2 className="text-2xl text-[#FFD700] mb-4">What is Python?</h2>
          <p className="mb-4">Python is a high-level, interpreted programming language known for its simplicity and readability. It's widely used in web development, data analysis, artificial intelligence, and more!</p>
          
          <div className="bg-black p-4 rounded">
            <pre className="text-green-400">
              {`def greet(name):
    print(f"Hello, {name}!")

greet("Pythonista")  # Outputs: Hello, Pythonista!`}
            </pre>
          </div>
        </div>

        <div className="bg-[#000044] border-4 border-[#FFD700] p-8 mb-8">
          <h2 className="text-2xl text-[#FFD700] mb-4">Python Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Easy to learn and read</li>
            <li>Extensive libraries and frameworks</li>
            <li>Cross-platform compatibility</li>
            <li>Large and active community</li>
            <li>Used in various fields (Web, AI, Data Science, etc.)</li>
          </ul>
        </div>

        <div className="bg-[#000044] border-4 border-[#FFD700] p-8 mb-8">
          <h2 className="text-2xl text-[#FFD700] mb-4">Basic Python Syntax</h2>
          <div className="bg-black p-4 rounded">
            <pre className="text-green-400">
              {`# Variables and data types
name = "Alice"
age = 30
height = 1.65

# Control flow
if age >= 18:
    print("You're an adult!")
else:
    print("You're a minor.")

# Loops
for i in range(5):
    print(f"Count: {i}")

# Functions
def calculate_area(radius):
    return 3.14 * radius ** 2

print(calculate_area(5))  # Output: 78.5`}
            </pre>
          </div>
        </div>

        <div className="text-center">
          <img
            src="/placeholder.svg?text=Python+Power!"
            alt="Python Power"
            width={300}
            height={200}
            className="pixelated inline-block"
          />
        </div>
      </div>
    </Layout>
  )
}

