export default function VideoComponent() {
  return (
    <>
      <h1 className='inline-block text-3xl font-black tracking-wide text-transparent lg:p-3 lg:pt-0 lg:text-5xl animate-text bg-gradient-to-r from-[#ec4c4c] via-[#EEF296] to-[#9ADE7B] bg-clip-text text-center w-full font-oswald'>
        PROMO VIDEO
      </h1>
      <video controls className='w-[90%] mx-auto lg:w-[70%] focus:outline-none'>
        <source src='/promo-video.mp4' />
      </video>
    </>
  );
}
