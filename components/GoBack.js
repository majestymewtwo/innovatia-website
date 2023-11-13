import Lottie from 'lottie-react'
import React from 'react'
import data from '../public/space-12.json'
import { useRouter } from 'next/navigation'
// import "../public/goback.png"
function GoBack() {
  const router = useRouter()
  return (
    <div className='m-10 transition ease-in-out delay-150  hover:scale-125   '>
     
      <button onClick={()=>router.back()}>
        <img src="/goback1.png" alt="" width={60} height={60} /></button>
    </div>
  )
}

export default GoBack
