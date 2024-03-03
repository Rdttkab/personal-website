import { Metadata } from "next";
import "./globals.css";
import Social from "@/components/social";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Rediet Tekola",
  description: "Welcome to my portfolio website",
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col items-center justify-center">
          <header className="flex justify-between items-center w-full p-4">
            <ul className="flex justify-center items-center uppercase">
              <li className="mr-6 w-28 border border-solid border-gray-400 text-center py-2 rounded-full hover:bg-blue-500 hover:cursor-pointer hover:text-white hover:border-0 transition duration-500 ease-linear transform">
                <Link href="/">Home</Link>
              </li>
              <li className="mr-6 w-28 border border-solid border-gray-400 text-center py-2 rounded-full hover:bg-blue-500 hover:cursor-pointer hover:text-white hover:border-0 transition duration-500 ease-linear transform">
                <Link href="/projects">Projects</Link>
              </li>
              <li className="mr-6 w-28 border border-solid border-gray-400 py-2 rounded-full text-center hover:bg-blue-500 hover:cursor-pointer hover:text-white hover:border-0 transition duration-500 ease-linear transform">
                <a href="">Blog</a>
              </li>
              <li className="w-28 border border-solid border-gray-400 py-2 rounded-full text-center hover:bg-blue-500 hover:cursor-pointer hover:text-white hover:border-0 transition duration-500 ease-linear transform">
                About
              </li>
            </ul>

            <div className="md:flex md:gap-2 hidden">
              {/* <Social /> */}
              {/* <Button asChild>
                <Link href="#">Sign in</Link>
              </Button>
              <Button asChild>
                <Link href="#">Sign up</Link>
              </Button> */}
              <Sheet>
                <SheetTrigger className="border p-2 cursor-pointer hover:text-blue-500">
                  Sign in/up
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription></SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </header>
          {children}
          <footer className="p-2 flex">
            Connect with me on
            <Social />
          </footer>
        </div>
      </body>
    </html>
  );
}
