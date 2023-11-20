export default function VideoComponent() {
  return (
    <video controls className='w-[90%] mx-auto'>
      <source src='/promo-video.mp4' />
    </video>
  );
}
