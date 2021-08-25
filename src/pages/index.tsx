import React from "react";
import Head from "next/head";

// Components
import Home from "components/home/Home/Home";

interface Props {}

const HomePage = (props: Props) => {
  return (
    <>
      <Head>
        <title>Amiibos: Arma tu colección</title>
        <meta
          name="description"
          content="Amiibos, encuentra tu figura coleccionable"
        />
        <link rel="canonical" href="https://amiibos.vercel.app/" />
      </Head>

      <Home />
    </>
  );
};

export default HomePage;
