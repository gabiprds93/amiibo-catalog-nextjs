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
        <meta name="robots" content="noindex" />
      </Head>

      <Results />
    </>
  );
};

export default ResultsPage;
