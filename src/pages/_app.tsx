import { FC } from "react";
import { AppProps as Props } from "next/app";

import Providers from "providers/Providers";
import "../styles/style.sass";

const App: FC<Props> = (props) => {
  const { Component, pageProps } = props;
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
};

export default App;
