import Layout from '../components/Layout'

const teamMembers = [
  {
    name: 'Sonny',
    role: 'Founder & Chief Vibes Officer',
    image: '/placeholder.svg?text=Sonny',
    socials: ['twitter', 'instagram', 'github', 'youtube']
  },
  {
    name: 'Dharma',
    role: 'Founding Engineer',
    image: '/placeholder.svg?text=Dharma',
    socials: ['twitter', 'github', 'linkedin']
  },
  {
    name: 'Asiqur',
    role: 'Software Engineer',
    image: '/placeholder.svg?text=Asiqur',
    socials: ['twitter', 'github', 'linkedin']
  },
  {
    name: 'Gillian',
    role: 'Head of Operations',
    image: '/placeholder.svg?text=Gillian',
    socials: ['twitter', 'linkedin', 'youtube']
  },
]

export default function TeamPage() {
  return (
    <Layout>
      <div className="text-center mb-16">
        <h1 className="text-4xl mb-4 text-[#FFD700] animate-pulse">
          MEET THE TEAM
        </h1>
        <p className="text-lg text-gray-300">
          The folks behind CodeDex have taught Computer Science at
          Columbia, NYU, CUNY, and popular EdTech platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div 
            key={member.name}
            className="relative group"
            style={{ 
              animation: 'fadeIn 0.5s ease-out',
              animationDelay: `${index * 0.1}s`
            }}
          >
            <div className="bg-[#000044] p-4 border-4 border-[#FFD700] transform group-hover:scale-105 transition-transform">
              <div className="relative mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="pixelated w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000044] to-transparent opacity-50" />
              </div>
              
              <h3 className="text-xl text-[#FFD700] mb-2">{member.name}</h3>
              <p className="text-sm text-gray-300 mb-4">{member.role}</p>
              
              <div className="flex justify-center space-x-4">
                {member.socials.map(social => (
                  <a
                    key={social}
                    href="#"
                    className="transform hover:scale-110 transition-transform"
                  >
                    <img
                      src={`/placeholder.svg?text=${social}`}
                      alt={social}
                      width={24}
                      height={24}
                      className="pixelated"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl text-[#FFD700] mb-8">BACKED BY</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {['Worklife', 'Hustle Fund', 'Transcend', 'Fellows'].map(company => (
            <div key={company} className="flex items-center justify-center">
              <img
                src={`/placeholder.svg?text=${company}`}
                alt={company}
                width={150}
                height={50}
                className="opacity-50 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

