import { type NextPage } from "next";
import Card from "./Card";
import { useState } from 'react';
import Head from "next/head";
import {TbChevronLeft, TbChevronRight} from "react-icons/tb"
import {BiBuilding} from "react-icons/bi"

const Home: NextPage = () => {
  const [toSkip, setToSkip] = useState(0);

  return (
    <>
      <Head>
        <title>Sreality Flats</title>
        <meta name="description" content="List of first 500 Sreality Flats" />
        <link rel="icon" href="https://external-content.duckduckgo.com/ip3/www.sreality.cz.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#fff4f4] to-[#e987a1]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem] drop-shadow mb-5 flex sm:flex-row flex-col shadow-xl p-5">
            <p>Sreality </p><div className="flex flex-row"><p>Fl</p><BiBuilding/><p>ts</p></div>
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-8">
            <Card toSkip={toSkip} />
          </div>
          <div className="flex space-x-2 justify-center mt-5">
          <button type="button" onClick={_ => toSkip>0 ? setToSkip(toSkip-20) : setToSkip(0)} className="inline-block px-6 py-2.5 bg-gray-100 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">
            <TbChevronLeft className="text-xl text-black mx-2"/>
          </button>
            <div className="inline-block px-6 py-2.5 bg-gray-100 font-medium text-md leading-tight uppercase rounded shadow-m">
              {toSkip} - {toSkip+20}
            </div>
          <button type="button" onClick={_ => setToSkip(toSkip+20)} className="inline-block px-6 py-2.5 bg-gray-100 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">
            <TbChevronRight className="text-xl text-black mx-2"/>
          </button>
        </div>
        </div>
      </main>
      <footer className="bg-gray-200 text-center lg:text-left pb-4 pt-2">
        <div className="text-gray-700 text-center p-4">
        2023 Stolen from:
        <a className="text-gray-80" href="https://www.sreality.cz/"> Sreality.cz</a>
  </div>
</footer>
    </>
  );
};

export default Home;
