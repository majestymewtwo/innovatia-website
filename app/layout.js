import { Inter, Luckiest_Guy, Quicksand } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/footer";
//importing for proper build DO NOT REMOVE
import { Card } from "@/components/ui/card";
import { Tabs } from "@/components/ui/tabscus";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });
const lucky = Luckiest_Guy({ subsets: ["latin"], weight: "400" });
const quick = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title:
    "Hi",
  description:
    "Join us at the M.Tech CSE Department Symposium — a day of tech innovation and creative exploration. Elevate your skills, connect with peers, and immerse yourself in a blend of technical and non-technical events. Unleash your potential and be part of the future of technology at Sri Sai Ram Engineering College.",
};

//test commit

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='shortcut icon'
          href='/rocket-cursor.png'
          type='image/x-icon'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap'
          rel='stylesheet'></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,200;0,8..60,300;0,8..60,400;0,8..60,500;0,8..60,600;0,8..60,700;0,8..60,800;0,8..60,900;1,8..60,200;1,8..60,300;1,8..60,400;1,8..60,500;1,8..60,600;1,8..60,700;1,8..60,800;1,8..60,900&display=swap'
          rel='stylesheet'></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500;1,600&family=Righteous&display=swap'
          rel='stylesheet'></link>
      </head>
      <body>
        <Sidebar />
        <main id='app' className='h-[100vh] relative overflow-y-scroll'>
          {children}
          <Analytics />
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
