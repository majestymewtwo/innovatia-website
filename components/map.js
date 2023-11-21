export default function MapComponent() {
  return (
    <div className='space-y-8 text-center font-poppins pb-12'>
      <h1 className='font-bold text-4xl lg:text-5xl bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent p-2 animate-text text-center'>
        How to reach us?
      </h1>
      <p className='text-white'>
        Our college buses will be available for transport. Other college
        students can avail them.
      </p>
      <a
        href='https://sairam.edu.in/wp-content/uploads/2015/06/BUS-ROUTE-DETAILS_FINAL-2.pdf'
        target='_blank'
        className='font-inconsolata underline text-yellow-300'>
        Check Bus Routes here
      </a>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3888.1818975171714!2d80.05476192507626!3d12.960209587354123!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f596c7fb72c9%3A0x8e7a30529f9ef227!2sSri%20Sairam%20Engineering%20College!5e0!3m2!1sen!2sin!4v1700556169454!5m2!1sen!2sin'
        className='w-full h-[450px] md:h-72'
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      />
    </div>
  );
}
