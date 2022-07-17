import type { NextPage } from "next";
import Head from "next/head";
import { Typography } from "#atoms";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>WDIW</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Typography>Welcome to What Did I Watch</Typography>
      </main>
    </>
  );
};

export default Home;
