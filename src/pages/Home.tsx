import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import MovingEmoji from '../components/MovingEmoji'
import { useState, useEffect } from 'react'

export default function HomePage() {
  const [firePositions, setFirePositions] = useState([
    { left: '10%', top: '5%', size: 30 },
    { left: '80%', top: '15%', size: 40 },
    { left: '25%', top: '85%', size: 35 },
    { left: '70%', top: '90%', size: 25 }
  ]);

  useEffect(() => {
    const animateFire = () => {
      setFirePositions(prev => prev.map(fire => ({
        ...fire,
        left: `${Math.max(0, Math.min(100, parseFloat(fire.left) + (Math.random() * 4 - 2)))}%`,
        top: `${Math.max(0, Math.min(100, parseFloat(fire.top) + (Math.random() * 4 - 2)))}%`
      })));
    };

    const intervalId = setInterval(animateFire, 200);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Layout>
      {firePositions.map((fire, index) => (
        <div 
          key={index}
          className="fixed animate-fire z-0"
          style={{
            left: fire.left,
            top: fire.top,
            width: `${fire.size}px`,
            height: `${fire.size}px`,
            position: 'absolute',
            background: 'radial-gradient(circle, rgba(255,165,0,1) 0%, rgba(255,69,0,1) 50%, rgba(139,0,0,1) 100%)',
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
            filter: 'blur(3px)',
            animation: 'flicker 0.1s infinite alternate'
          }}
        />
      ))}

      <div className="text-center relative z-10">
        <MovingEmoji emoji="💻" position="top-left" />
        <MovingEmoji emoji="🚀" position="top-right" />
        <MovingEmoji emoji="⭐" position="bottom-left" />
        <MovingEmoji emoji="🌟" position="bottom-right" />

        <h1 className="text-6xl font-bold bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] inline-block text-transparent bg-clip-text animate-pulse mb-4">
          CodeDex
        </h1>
        <div className="text-yellow-300 text-xl mb-8 animate-float">
          Your Radical Coding Encyclopedia!
        </div>

        <table width="100%" border={1} cellPadding={8} cellSpacing={0} className="bg-[#000044]">
          <tbody>
            <tr>
              <td width="20%" valign="top" className="bg-[#000066]">
                <div className="space-y-4">
                  <div className="bg-[#FF00FF] p-2 font-bold animate-blink">QUICK LINKS</div>
                  <Link to="/html" className="block hover:text-yellow-300 no-underline">➡️ HTML Basics</Link>
                  <Link to="/css" className="block hover:text-yellow-300 no-underline">➡️ CSS Tutorial</Link>
                  <Link to="/javascript" className="block hover:text-yellow-300 no-underline">➡️ JS Workshop</Link>
                  <Link to="/python" className="block hover:text-yellow-300 no-underline">➡️ Python Zone</Link>
                </div>
              </td>
              <td valign="top">
                <div className="space-y-6">
                  <div className="bg-[#008080] p-4 border-2 border-white">
                    <h2 className="text-2xl font-bold text-yellow-300 mb-2 animate-float">
                      🌟 Welcome to the World of Code! 🌟
                    </h2>
                    <p>
                      Get ready to embark on an AWESOME journey into the world of programming!
                      Our radical tutorials will teach you everything you need to know about
                      HTML, CSS, JavaScript, and Python!
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Link to="/html" className="bg-[#000066] p-4 border border-[#FF00FF] hover:border-[#00FFFF] block no-underline">
                      <h3 className="text-xl font-bold text-[#00FFFF] mb-2">HTML Zone 🌐</h3>
                      <p>Master the art of HTML! Learn tags, elements, and more!</p>
                    </Link>
                    <Link to="/css" className="bg-[#000066] p-4 border border-[#FF00FF] hover:border-[#00FFFF] block no-underline">
                      <h3 className="text-xl font-bold text-[#00FFFF] mb-2">CSS World 🎨</h3>
                      <p>Style your pages with awesome CSS tricks and tips!</p>
                    </Link>
                  </div>

                  <div className="bg-black p-2">
                    <marquee scrollamount="3" className="text-[#00FFFF]">
                      🔥 NEW TUTORIAL ALERT! Learn about the amazing {'<blink>'} tag! |
                      💫 Master table layouts! | 🌟 Join our guestbook! | 🚀 Download our JavaScript games!
                    </marquee>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="mt-8 bg-[#000066] p-6 rounded-lg shadow-lg relative overflow-hidden">
          <div className="flex items-center justify-center space-x-4 relative z-10">
            <div className="text-[#00FFFF] text-4xl font-bold animate-pulse">
              🚧 Coming Soon 🚧
            </div>
            <div className="text-yellow-300 text-xl">
              Epic Coding Tutorials & Resources!
            </div>
          </div>
          <p className="text-white text-center mt-4 italic relative z-10">
            We're preparing mind-blowing content to supercharge your coding skills!
          </p>
        </div>
      </div>
    </Layout>
  )
}