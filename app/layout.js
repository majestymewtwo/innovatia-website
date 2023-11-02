import { Inter, Luckiest_Guy, Quicksand } from "next/font/google";
import "./globals.css";
// import Sidebar from "@/components/sidebar";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });
const lucky = Luckiest_Guy({ subsets: ["latin"], weight: "400" });
const quick = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "Innovatia 2.0 | Deparment Of M.Tech Computer Science And Engineering",
  description: "Generated by create next app",
};

//test commit

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="./rocket-cursor.png"
          type="image/x-icon"
        />
      </head>
      <body className={`${lucky.className}`}>
        {/* <Sidebar /> */}
        <main id="app" className="z-0 bg-fixed bg-no-repeat bg-cover main-body">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
