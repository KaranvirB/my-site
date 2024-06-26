import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import Image from "next/image";
import logo from "../../public/img/24930593642580a16c91bc6bea418a4f.png"
import "./globals.css";

const albert = Albert_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Karanvir's Website",
  description: "A website about me.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={albert.className}>
        {/* <div className="fixed flex h-[4rem] z-50 top-0 right-0 left-0 justify-between bg-turq-400">
          <div className="flex space-x-5">
            <Image src={logo} width={90} height={70} alt={"logo"}/>
            <h1 className="my-auto text-2xl text-black">Karanvir's Website</h1>
          </div>
          <button className="px-12 text-3xl bg-red-500 text-red-200 hover:bg-red-800 duration-200">x</button>
        </div> */}
        {children}
      </body>
    </html>
  );
}
