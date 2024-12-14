import Layout from '../components/Layout';

export default function HomePage() {
    return (
        <Layout>
            <div className="text-center">
                {/* Logo Section */}
                <div className="mb-8">
                    <h1 className="text-6xl font-bold bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] inline-block text-transparent bg-clip-text animate-pulse">
                        CodeDex
                    </h1>
                    <div className="text-yellow-300 text-xl mt-2">
                        Your Coding Encyclopedia!
                    </div>
                </div>

                {/* Main Content Grid */}
                <table className="w-full border-collapse bg-[#000044]">
                    <tbody>
                        <tr>
                            {/* Left Navigation */}
                            <td className="w-1/5 bg-[#000066] p-4 align-top">
                                <div className="space-y-4">
                                    <div className="bg-[#FF00FF] p-2 font-bold text-white">QUICK LINKS</div>
                                    <nav>
                                        <ul className="space-y-2">
                                            <li className="hover:text-yellow-300 cursor-pointer">➡️ Getting Started</li>
                                            <li className="hover:text-yellow-300 cursor-pointer">➡️ HTML Basics</li>
                                            <li className="hover:text-yellow-300 cursor-pointer">➡️ CSS Tutorial</li>
                                            <li className="hover:text-yellow-300 cursor-pointer">➡️ JS Workshop</li>
                                        </ul>
                                    </nav>
                                    <div className="mt-8 flex justify-center">
                                        <img
                                            src="/placeholder.svg?text=NEW"
                                            alt="New Content"
                                            className="animate-bounce"
                                            width={80}
                                            height={40}
                                        />
                                    </div>
                                </div>
                            </td>

                            {/* Main Content Area */}
                            <td className="align-top p-4">
                                <div className="space-y-6">
                                    {/* Welcome Section */}
                                    <div className="bg-[#008080] p-4 border-2 border-white rounded-md">
                                        <h2 className="text-2xl font-bold text-yellow-300 mb-2">
                                            🌟 Welcome to the World of Code! 🌟
                                        </h2>
                                        <p className="text-white">
                                            Get ready to embark on an AWESOME journey into the world of programming! Our
                                            radical tutorials will teach you everything you need to know about HTML, CSS,
                                            JavaScript, and Python!
                                        </p>
                                    </div>

                                    {/* Featured Sections */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-[#000066] p-4 border border-[#FF00FF] hover:border-[#00FFFF] rounded-md">
                                            <h3 className="text-xl font-bold text-[#00FFFF] mb-2">HTML Zone</h3>
                                            <p className="text-white">Master the art of HTML! Learn tags, elements, and more!</p>
                                            <div className="mt-2">
                                                <button className="bg-[#FF00FF] text-white px-4 py-2 rounded hover:bg-[#CC00CC]">
                                                    Enter Zone →
                                                </button>
                                            </div>
                                        </div>
                                        <div className="bg-[#000066] p-4 border border-[#FF00FF] hover:border-[#00FFFF] rounded-md">
                                            <h3 className="text-xl font-bold text-[#00FFFF] mb-2">CSS World</h3>
                                            <p className="text-white">Style your pages with awesome CSS tricks and tips!</p>
                                            <div className="mt-2">
                                                <button className="bg-[#FF00FF] text-white px-4 py-2 rounded hover:bg-[#CC00CC]">
                                                    Enter World →
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* News Ticker */}
                                    <div className="bg-black p-2 rounded">
                                        <marquee scrollamount="3" className="text-[#00FFFF]">
                                            🔥 NEW TUTORIAL ALERT! Learn about the amazing {'<blink>'} tag! |
                                            💫 Master table layouts! | 🌟 Join our guestbook! | 🚀 Download our JavaScript
                                            games!
                                        </marquee>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Layout>
    );
}
