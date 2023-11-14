import Lottie from 'lottie-react'
import React from 'react'
import data from '../public/space-12.json'
import { useRouter } from 'next/navigation'

function GoBack({ path }) {
  const router = useRouter();

  const navigate = () => {
    if (path) router.push(path);
    else router.back();
  };

  return (
    <div className='absolute top-0 left-0 p-5 md:p-4'>
      <button onClick={navigate}>
        <img src='/go-back.png' alt='' width={50} height={50} />
      </button>
    </div>
  );
}

export default GoBack
