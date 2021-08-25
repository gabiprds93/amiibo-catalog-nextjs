import React from "react";
import Head from "next/head";

// Components
import Results from "components/results/Results/Results";

interface Props {}

const ResultsPage = (props: Props) => {
  return (
    <>
      <Head>
        <title>Resultados</title>
        <meta name="description" content="Página de resultados de Amiibos" />
        <link rel="canonical" href="https://amiibos.vercel.app/results" />
        <meta name="robots" content="noindex,follow" />
      </Head>

      <Results />
    </>
  );
};

export default ResultsPage;
