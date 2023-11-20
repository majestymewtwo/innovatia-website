export default function Sponsors() {
  return (
    <div className='space-y-10 text-center px-4'>
      <h1 className='inline-block text-3xl font-black tracking-tight text-transparent md:p-3 md:pt-0 md:text-5xl animate-text bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-300 via-fuchsia-600 to-orange-600 bg-clip-text'>
        OUR SPONSORS
      </h1>
      <img
        className='h-[80px] lg:h-[100px] rounded-md mx-auto hover:scale-105 transition-all ease-in-out duration-200'
        src='/vasanth-and-co.png'
        alt='Vasanth & Co'
      />
      <div className='flex flex-col md:flex-row items-center justify-center gap-7 py-5'>
        <img
          className='h-[150px] lg:h-[200px] rounded-md hover:scale-105 transition-all ease-in-out duration-200'
          src='/kiteblu.png'
          alt='Kiteblu'
        />
        <img
          className='h-[100px] rounded-md hover:scale-105 transition-all ease-in-out duration-200'
          src='/reliance-trends.png'
          alt='Reliance Trends'
        />
      </div>
    </div>
  );
}
