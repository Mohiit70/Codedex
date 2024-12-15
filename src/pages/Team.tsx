import Layout from '../components/Layout';

const teamMembers = [
  {
    name: 'Sonny',
    role: 'Founder & Chief Vibes Officer',
    image: '/images/team/sonny_avatar.png',
  },
  {
    name: 'Dharma',
    role: 'Founding Engineer',
    image: '/images/team/dharma_avatar.png',
  },
  {
    name: 'Asiqur',
    role: 'Software Engineer',
    image: '/images/team/asiqur_animated.png',
  },
  {
    name: 'Lillian',
    role: 'Head of Operations',
    image: '/images/team/lil_animated.png',
  },
  {
    name: 'Naomi',
    role: 'Social Media Manager',
    image: '/images/team/naomi_animated.png',
  },
  {
    name: 'Eric',
    role: 'Community Manager',
    image: '/images/team/eric_animated.png',
  },
  {
    name: 'Ellie',
    role: 'Curriculum Developer',
    image: '/images/team/ellie_animated.png',
  },
  {
    name: 'Jackie',
    role: 'Sr. Product Designer',
    image: '/images/team/jackie_animated.webp',
  },
  {
    name: 'Colin',
    role: 'Email Marketing Associate',
    image: '/images/team/colin_animated.webp',
  },
];

export default function TeamPage() {
  return (
    <Layout>
      <div className="text-center mb-16">
        <h1 className="text-4xl mb-4 text-[#FFD700] animate-pulse">
          MEET THE TEAM
        </h1>
        <p className="text-lg text-gray-300">
          The folks behind CodeDex have taught Computer Science at Columbia, NYU, CUNY, and popular EdTech platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={member.name}
            className="relative group"
            style={{
              animation: 'fadeIn 0.5s ease-out',
              animationDelay: `${index * 0.1}s`,
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
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

