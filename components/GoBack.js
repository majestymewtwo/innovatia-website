import Lottie from 'lottie-react'
import React from 'react'
import data from '../public/space-12.json'
import { useRouter } from 'next/navigation'
function GoBack() {
  const router = useRouter()
  return (
    <div>
     
      <button onClick={()=>router.back()}>
        <div className='w-[100px] h-[100px] transform -rotate-90 '><Lottie animationData={data}/></div></button>
    </div>
  )
}

export default GoBack
