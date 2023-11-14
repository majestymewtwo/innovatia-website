import Lottie from 'lottie-react'
import React from 'react'
import data from '../public/space-12.json'
import { useRouter } from 'next/navigation'
// import "../public/goback.png"
function GoBack() {
  const router = useRouter()
  return (
    <div className='absolute top-0 left-0 p-5 md:p-4'>
      <button onClick={() => router.back()}>
        <img src='/go-back.png' alt='' width={50} height={50} />
      </button>
    </div>
  );
}

export default GoBack
