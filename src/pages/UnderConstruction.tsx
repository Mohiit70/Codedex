import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function UnderConstructionPage() {
  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-4xl mb-4 text-[#FFD700] animate-pulse">
          🚧 UNDER CONSTRUCTION 🚧
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
          <div className="relative" style={{paddingBottom: '75%'}}>
            <iframe 
              src="https://giphy.com/embed/hV1dkT2u1gqTUpKdKy" 
              width="100%" 
              height="100%" 
              style={{position: 'absolute'}} 
              frameBorder="0" 
              className="giphy-embed" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="relative" style={{paddingBottom: '84%'}}>
            <iframe 
              src="https://giphy.com/embed/7uDtQm2jKdS0VGLg46" 
              width="100%" 
              height="100%" 
              style={{position: 'absolute'}} 
              frameBorder="0" 
              className="giphy-embed" 
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <p className="text-xl text-gray-300 mb-8">
          We're working hard to bring you awesome new features!
          <br />Please check back soon.
        </p>
        <div className="inline-block border-2 border-[#FFD700] p-4 animate-pulse">
          <p className="text-[#FFD700]">
            Estimated completion: 90s o'clock
          </p>
        </div>
        <div className="mt-8">
          <Link
            to="/courses"
            className="px-4 py-2 bg-[#FFD700] text-black hover:bg-yellow-400 transition-colors"
          >
            Back to Courses
          </Link>
        </div>
      </div>
    </Layout>
  )
}

