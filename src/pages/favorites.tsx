import React from "react";
import Head from "next/head";

// Components
import Favorites from "components/favorites/Favorites/Favorites";

interface Props {}

const FavoritesPage = (props: Props) => {
  return (
    <>
      <Head>
        <title>Tus Amiibos favoritos</title>
        <meta
          name="description"
          content="Encuentra tu lista de Amiibos favoritos"
        />
        <meta name="robots" content="noindex" />
      </Head>

      <Favorites />
    </>
  );
};

export default FavoritesPage;
