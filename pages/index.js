import Head from "next/head";
import Social from "../components/social";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Head>
        <title>Rediet Tekola</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-between items-center w-full p-4">
        <ul className="flex justify-center items-center uppercase">
          <li className="mr-6 w-28 border border-solid border-gray-400 text-center py-2 rounded-full hover:bg-blue-500 hover:cursor-pointer hover:text-white hover:border-0 transition duration-500 ease-linear transform">
            <a href="" className="">
              Projects
            </a>
          </li>
          <li className="mr-6 w-28 border border-solid border-gray-400 py-2 rounded-full text-center hover:bg-blue-500 hover:cursor-pointer hover:text-white hover:border-0">
            <a href="">Blog</a>
          </li>
          <li className="w-28 border border-solid border-gray-400 py-2 rounded-full text-center hover:bg-blue-500 hover:cursor-pointer hover:text-white hover:border-0">
            About
          </li>
        </ul>

        <Social />
      </header>
      <main className="flex">
        <h1 className="font-bold">Welcome to my website!</h1>
      </main>

      <footer className="absolute bottom-0 p-2 flex">
        Connect with me on
        <Social />
      </footer>
    </div>
  );
}
