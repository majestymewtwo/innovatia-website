import MemberCard from '@/components/team/MemberCard';
import React from 'react';
import team1 from '../../public/team1.json'; // Import the animation JSON file

function Page() {
  return (
    <>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <h3>THE TEAM</h3>
      </div>
      <div className='flex flex-col justify-center md:grid md:grid-cols-3 pb-12'>
        <MemberCard name='Ruthi' role="Designer and Developer" animationData={team1} />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
      </div>
    </>
  );
}

export default Page;    