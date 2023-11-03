'use client'
import React from 'react';
import Lottie from 'lottie-react';
import './MemberCard.css';

function MemberCard(props) {
  const { name, role, animationData } = props;

  return (
    <div className='homeContainer md:col'>
      <div className='profile-card'>    
        <div className='img'>
          <Lottie animationData={animationData} className='' />
        </div>
        <div className='caption'>
          <h3 className='text-white'>{name}</h3>
          <p className='text-white'>{role}</p>
          <div className='social-links'></div>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;