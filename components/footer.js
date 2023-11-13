import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <div
      id='footer'
      className='flex flex-col md:flex-row justify-between items-center bottom-0 w-full text-white px-10 py-2 space-y-5 md:spcae-y-0'>
      <div className='flex flex-col md:flex-row items-center gap-6'>
        <img src='/sec-logo-white.png' alt='sec-white-logo' className='h-16' />
        <h3 className='hidden md:block md:pt-6'>|</h3>
        <Socials />
      </div>
      <h3 className='hidden md:block'>|</h3>
      <h3 className='font-light tracking-wide'>
        © 2023-2024 Department Of M.Tech CSE
      </h3>
      <h3 className='hidden md:block'>|</h3>
      <h3 className='font-light tracking-wide'>
        Sai Leo Nagar, West Tambaram, Chennai - 44
      </h3>
      <h3 className='hidden md:block'>|</h3>
      <div className='flex items-center gap-4'>
        <a
          href='https://www.sairam.edu.in'
          target='_blank'
          className='hover:scale-110 hover:text-[#FFB100] transition-all ease-in-out duration-200'>
          www.sairam.edu.in
        </a>
        <h3 className='hidden md:block'>|</h3>
        <img src='/chairman.png' alt='sec-white-logo' className='h-16' />
      </div>
    </div>
  );
}

function Socials() {
  const hoverClass =
    "hover:scale-125 hover:text-[#FFB100] transition-all ease-in-out duration-200 cursor-pointer";
  return (
    <div className='flex items-center gap-8 text-white md:pt-6'>
      <a href='https://www.instagram.com/mtechcsesairam/' target='_blank'>
        <Instagram className={hoverClass} />
      </a>
      <a
        href='https://www.linkedin.com/in/sairam-m-tech-cse-794733229/'
        target='_blank'>
        <Linkedin className={hoverClass} />
      </a>
      <a
        href='https://www.facebook.com/profile.php?id=100076604003632'
        target='_blank'>
        <Facebook className={hoverClass} />
      </a>
      <a
        href='https://www.youtube.com/@sairam-m.tech-cse5yearinte455'
        target='_blank'>
        <Youtube className={hoverClass} />
      </a>
    </div>
  );
}
