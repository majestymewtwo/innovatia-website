export default function VideoComponent() {
  return (
    <div className='text-center space-y-4'>
      <h1 className='inline-block text-3xl font-black tracking-tight text-transparent md:p-3 md:pt-0 md:text-5xl animate-text bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-300 via-fuchsia-600 to-orange-600 bg-clip-text'>
        PROMO VIDEO
      </h1>
      <video controls className='w-[90%] mx-auto lg:w-[70%] focus:outline-none'>
        <source src='/promo-video.mp4' />
      </video>
    </div>
  );
}
