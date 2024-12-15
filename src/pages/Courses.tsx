import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const courses = [
  {
    title: 'Python',
    description: 'Learn programming fundamentals such as variables, control flow, and loops with the most popular language.',
    image: '/images/Python-Logo-1997.png',
    level: 'BEGINNER',
    category: 'Popular'
  },
  {
    title: 'HTML',
    description: 'Create your first website with HTML, the building blocks of the web.',
    image: '/images/1024px-Old_HTML_Logo.svg.png',
    level: 'BEGINNER',
    category: 'Web Development'
  },
  {
    title: 'CSS',
    description: 'Learn to use CSS selectors and properties to style your HTML pages.',
    image: '/images/css-3-logo-AF06D75231-seeklogo.com.png',
    level: 'BEGINNER',
    category: 'Web Development'
  },
  {
    title: 'JavaScript',
    description: 'Learn variables, loops, functions, and events to start building interactive web apps.',
    image: '/images/JavaScript-Logo.png',
    level: 'BEGINNER',
    category: 'Web Development'
  },
  {
    title: 'SQL',
    description: 'Learn database basics, queries, calculations, and more to start managing data.',
    image: '/images/logo_sql.gif',
    level: 'BEGINNER',
    category: 'Data Science'
  }
];

const categories = ['Popular', 'Web Development', 'Data Science', 'Tools'];

export default function CoursesPage() {
  return (
    <Layout>
      <div className="text-center mb-16">
        <h1 className="text-4xl mb-4 text-[#FFD700]">
          Journey through the<br />world of programming
        </h1>
        <p className="text-xl text-gray-300">
          Learn to code with fun, interactive courses handcrafted by industry experts.
        </p>
      </div>

      <div className="mb-8 flex justify-center space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            className="px-4 py-2 rounded-full border-2 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black transition-colors"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div
            key={course.title}
            className="group cursor-pointer"
            style={{
              animation: 'slideIn 0.5s ease-out',
              animationDelay: `${index * 0.1}s`
            }}
          >
            <div className="bg-[#000044] border-4 border-[#FFD700] overflow-hidden transform group-hover:scale-105 transition-transform">
              <div className="relative h-48 flex items-center justify-center p-4">
                <img
                  src={course.image}
                  alt={course.title}
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500 pixelated"
                />
              </div>

              <div className="p-6">
                <div className="text-sm text-gray-400 mb-2">COURSE</div>
                <h3 className="text-2xl text-[#FFD700] mb-2">{course.title}</h3>
                <p className="text-gray-300 mb-4">{course.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-sm bg-black px-3 py-1 text-[#FFD700]">
                    {course.level}
                  </span>
                  <Link
                    to="/under-construction"
                    className="text-[#FFD700] group-hover:translate-x-2 transition-transform"
                  >
                    Start Course →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link
          to="/under-construction"
          className="px-8 py-4 bg-[#FFD700] text-black text-xl hover:bg-yellow-400 transition-colors transform hover:scale-105 inline-block"
        >
          View All Courses
        </Link>
      </div>
    </Layout>
  );
}

