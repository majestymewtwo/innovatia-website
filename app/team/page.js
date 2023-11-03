import MemberCard from '@/components/team/MemberCard';
import React from 'react';
import image1 from '../../public/yogesh.jpg'
 // Import the animation JSON file
import './page.css'
function Page() {
  // Data for team members
  const teamMembers = [
    { name: 'Muthu Aanand', role: 'Developer', image: '/muthu.jpg', github: 'https://github.com/majestymewtwo', instagram: 'https://www.instagram.com/mew2uwu/', linkedin: 'https://www.linkedin.com/in/muthu-aanand-su-b36188218/' },
    { name: 'Ruthi Shankari', role: 'Designer and Developer' },
    { name: 'Guru Sanjay', role: 'Developer', image: '' },
    { name: 'Yogesh', role: 'Developer', image: '/yogesh.jpg', github: 'https://github.com/Yogesh251103', instagram: 'https://www.instagram.com/yogesh._10._/', linkedin: 'https://www.linkedin.com/in/yogesh-m-16ab20216/' },
    { name: 'Yogesh', role: 'Developer' },
    { name: 'Yogesh', role: 'Developer' },
    { name: 'Ruthi', role: 'Designer and Developer', image: '' },
    { name: 'Yogesh', role: 'Developer' },
    { name: 'Yogesh', role: 'Developer' },
    { name: 'Yogesh', role: 'Developer' },
    { name: 'Yogesh', role: 'Developer' },
    { name: 'Yogesh', role: 'Developer' },
    // Add more team members as needed
  ];

  return (
    <>
      <div className='lg:flex lg:w-[100vw] lg:min-h-[100vw] lg:justify-center'>
        <div className='absolute left-1/2 -translate-x-1/2 -translate-y/2 md:absolute md:top-2 pt-20 text-2xl md:text-3xl md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2'>
          <h3>THE TEAM OF INNOVATIA</h3>
        </div>
        <div className='grid grid-cols-2 justify-center md:grid md:grid-cols-4 lg:w-4/5 pb-12 md:gap-1'>
          {teamMembers.map((member, index) => (
            <div id='section' className=' ' key={index}>
              <MemberCard
                name={member.name}
                role={member.role}
                image={member.image}
                github={member.github}
                instagram={member.instagram}
                linkedin={member.linkedin}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Page;
