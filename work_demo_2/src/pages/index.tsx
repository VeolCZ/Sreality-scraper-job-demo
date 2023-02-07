import { type NextPage } from "next";
import Head from "next/head";
import { api } from "../utils/api";

const Home: NextPage = () => {
  const getFlats = api.flatRouter.getFlats.useQuery({ skip: 0 });

  return (
    <>
      <Head>
        <title>Sreality Flats</title>
        <meta name="description" content="List of first 500 Sreality Flats" />
        <link rel="icon" href="https://external-content.duckduckgo.com/ip3/www.sreality.cz.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Sreality Flats
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <p className="text-2xl text-white">
              {getFlats.data ? getFlats.data[0]?.name : "Loading tRPC query..."}
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
